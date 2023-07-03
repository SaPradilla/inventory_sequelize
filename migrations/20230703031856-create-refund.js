'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refunds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_sale: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      client_name: {
        type: Sequelize.STRING
      },
      client_phone: {
        type: Sequelize.INTEGER
      },
      client_dni: {
        type: Sequelize.INTEGER
      },
      refund_date: {
        type: Sequelize.DATE
      },
      refund_total: {
        type: Sequelize.INTEGER
      },
      reason_retun: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('refunds');
  }
};