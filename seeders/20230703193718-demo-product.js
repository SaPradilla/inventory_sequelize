'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('products', [{

      name: "Aqualen Emulsión",
      lot_number: 7707271,
      expiration_date: new Date("2024-01-01T00:00:00.000Z"),
      sales_price: 8500,
      purchase_price: 98300,
      stock: 24,
      id_category: 1,
      id_provider:1,
      createdAt: new Date(),
      updatedAt: new Date(),
      
    }]);
  },
  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('products', null, {});
     
  }
};
