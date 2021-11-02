'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["male", "female"],
        allowNull: false
      },
      address_1: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      address_2: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      country: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      utc_created_at: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      utc_updated_at: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};