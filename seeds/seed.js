const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models');

const deptSeedData = require('./deptSeedData.json');
const roleSeedData = require('./roleSeedData.json');
const empSeedData = require('./empSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const departments = await Department.bulkCreate(deptSeedData);

  for (const { id } of dept) {
    const newDepartment = await Department.create({
      dept_id: id,
    });
  }

  for (const role of roleSeedData) {
    const newRole = await Role.create({
      ...role,
      dept_id: departments[Math.floor(Math.random() * departments.length)].id,
    });
  }

  for (const employee of empSeedData) {
    const newEmployee = await Employee.create({
      ...employee,
      dept_id: departments[Math.floor(Math.random() * departments.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
