'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_product: {
        type: Sequelize.INTEGER,
        references:{
          model: 'products',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_purchase: {
        type: Sequelize.INTEGER,
        references:{
          model: 'purchases',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_refund: {
        type: Sequelize.INTEGER,
        references:{
          model: 'refunds',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_sale: {
        type: Sequelize.INTEGER,
        references:{
          model: 'sales',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_adjustment: {
        type: Sequelize.INTEGER,
        references:{
          model: 'adjustments',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type_transaction: {
        type: Sequelize.ENUM("purchase,sale,refund,adjustment")
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      date_transaction: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('transactions');
  }
};