//const Department = require('../models/Dept');

exports = getAllDepts = async (req, res, next) => {
    res.send("Get dept route");

};

exports.createNewDept = async  (req, res, next) => {
 res.send("Get New Dept Route");
};

exports.getDeptById = async (req, res, next) => {
    res.send("Get Dept By ID Route");
};