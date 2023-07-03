'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // 1:1 | stock
      product.hasOne(models.stock,{
        foreignKey:'id_stock'
      })
      // 1:M relacion de pertencia | category
      product.belongsTo(models.category)
      // 1:M relacion de pertencia | provider
      product.belongsTo(models.provider)
      // 1: M | transaction
      product.hasMany(models.transaction,{
        foreignKey: 'id_product'
      })

    }
  }
  product.init({
    name: DataTypes.STRING,
    lot_number: DataTypes.INTEGER,
    expiration_date: DataTypes.DATE,
    sales_price: DataTypes.INTEGER,
    purchase_price: DataTypes.INTEGER,
    id_stock: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    id_provider: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};