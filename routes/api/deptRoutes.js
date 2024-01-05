const router = require('express').Router();
const sequelize = require('../../config/CONN');
const Department = require('../../models/Dept');
const Role = require('../../models/Role');
const Employee = require('../../models/Emp');

// GET depts
router.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Hello, World!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/dept', async (req, res) => {
    try {
        const { title } = req.body;

        const newDepartment = await Department.create({ title });

        res.status(200).json({ message: 'Department added successfully!'});

    } catch (e) {
        console.log(`Error:`, e.message);
        res.status(500).json({ message: 'Error adding department.' });

    }
});

// GET a single dept
router.get('/:id', async (req, res) => {
  try {
    const deptData = await Dept.findByPk(req.params.id, {
      include: [{ model: Role }, { model: Employee }],
      attributes: {
        include: [
          [
            // Use plain SQL to select all deptartments 
            sequelize.literal(
                '(SELECT * FROM dept;)'
                ),
                'totalDepts',
          ],
        ],
      },
    });

    if (!deptData) {
      res.status(404).json({ message: 'No dept found with that id!' });
      return;
    }

    res.status(200).json(deptData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
