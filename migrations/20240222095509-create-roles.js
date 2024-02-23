'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(45)
      }
    });
  },
  

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role');
  }
};
