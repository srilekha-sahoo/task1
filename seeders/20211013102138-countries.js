'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      {
      country_name: 'INDIA',
      utc_created_at: new Date(),
      utc_updated_at: new Date()
     },
      {
      country_name: 'AFRICA',
      utc_created_at: new Date(),
      utc_updated_at: new Date()
     },
      {
      country_name: 'USA',
      utc_created_at: new Date(),
      utc_updated_at: new Date()
     },
      {
      country_name: 'UK',
      utc_created_at: new Date(),
      utc_updated_at: new Date()
     }
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
