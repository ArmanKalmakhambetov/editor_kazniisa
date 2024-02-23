const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(45)
    }
}, {
    tableName: 'roles',
    timestamps: false
});

module.exports = Role;