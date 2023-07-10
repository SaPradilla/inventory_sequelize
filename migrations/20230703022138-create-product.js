'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lot_number: {
        type: Sequelize.INTEGER(11)
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      sales_price: {
        type: Sequelize.INTEGER(11)
      },
      purchase_price: {
        type: Sequelize.INTEGER(11)
      },
      stock: {
        allowNull:false,
        type: Sequelize.INTEGER(15)
      },
      id_category: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_provider: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'providers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};