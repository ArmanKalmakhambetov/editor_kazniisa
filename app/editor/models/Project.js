const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    project_name: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'projects',
    timestamps: false
});

module.exports = Project;
