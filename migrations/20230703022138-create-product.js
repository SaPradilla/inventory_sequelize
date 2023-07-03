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
        type: Sequelize.INTEGER
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      sales_price: {
        type: Sequelize.INTEGER
      },
      purchase_price: {
        type: Sequelize.INTEGER
      },
      id_stock: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'stocks',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

    await queryInterface.addColumn('stocks','id_product',{
      allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('stocks','id_product')
    await queryInterface.dropTable('products');
  }
};