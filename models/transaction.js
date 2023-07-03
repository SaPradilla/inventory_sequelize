'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction.belongsTo(models.product)
      transaction.belongsTo(models.purchase)
      transaction.belongsTo(models.refund)
      transaction.belongsTo(models.sale)
      transaction.belongsTo(models.adjustment)
    }
  }
  transaction.init({
    id_product: DataTypes.INTEGER,
    id_purchase: DataTypes.INTEGER,
    id_refund: DataTypes.INTEGER,
    id_sale: DataTypes.INTEGER,
    id_adjustment: DataTypes.INTEGER,
    type_transaction: DataTypes.ENUM("purchase,sale,refund,adjustment"),
    quantity: DataTypes.INTEGER,
    date_transaction: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};