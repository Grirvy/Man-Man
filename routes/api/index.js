const router = require('express').Router();
const deptRoutes = require('./deptRoutes');

router.use('/dept', deptRoutes);

module.exports = router;
