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
      transaction.belongsTo(models.product,{
        foreignKey: 'id_product'
      })
      transaction.belongsTo(models.purchase,{
        foreignKey: 'id_purchase'
      })
      transaction.belongsTo(models.refund,{
        foreignKey: 'id_refund'
      })
      transaction.belongsTo(models.sale,{
        foreignKey: 'id_sale'
      })
    }
  }
  transaction.init({
    id_product: DataTypes.INTEGER,
    id_purchase: DataTypes.INTEGER,
    id_refund: DataTypes.INTEGER,
    id_sale: DataTypes.INTEGER,
    type_transaction: DataTypes.ENUM("purchase","sale","refund"),
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};