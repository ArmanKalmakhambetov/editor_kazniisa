const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Document = sequelize.define('Document', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false
    },
    document_name: {
        type: DataTypes.STRING(255)
    },
    document_content: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'documents',
    timestamps: false
});

module.exports = Document;
