const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/CONN');

class Department extends Model {}

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        num: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,    
        underscored: true,
        modelName: 'dept',
    }
)

module.exports = Department;