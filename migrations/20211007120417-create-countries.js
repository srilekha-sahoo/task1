'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_name: {
        type: Sequelize.STRING(100)
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      utc_created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      utc_updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries');
  }
};