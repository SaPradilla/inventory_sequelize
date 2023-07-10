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


      // 1:M relacion de pertencia | category
      product.belongsTo(models.category,{
        foreignKey:'id_category'
      })
      // 1:M relacion de pertencia | provider
      product.belongsTo(models.provider,{
        foreignKey:'id_provider'
      })
      // 1: M | transaction
      product.hasMany(models.transaction,{
        foreignKey: 'id_product'
      })

    }
  }
  product.init({
    name: DataTypes.STRING,
    lot_number: DataTypes.INTEGER(11),
    expiration_date: DataTypes.DATE,
    sales_price: DataTypes.INTEGER(11),
    purchase_price: DataTypes.INTEGER(11),
    stock: DataTypes.INTEGER(15),
    id_category: DataTypes.INTEGER,
    id_provider: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};