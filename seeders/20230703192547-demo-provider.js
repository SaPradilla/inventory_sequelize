'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('providers', [{

      name_brand: 'AULEN PHARMA, S.A.',
      address: 'Cl. 101b #45a-41, Bogotá',
      phone:5331443,
      createdAt: new Date(),
      updatedAt: new Date(),
      
    }]);
  },
  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('providers', null, {});
     
  }
};
