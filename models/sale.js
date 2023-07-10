'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M || refund
      sale.hasMany(models.refund,{
        foreignKey: 'id_sale'
      })
      // 1: M | transaction
      sale.hasMany(models.transaction,{
        foreignKey: 'id_sale'
      })
    }
  }
  sale.init({
    client_name: DataTypes.STRING,
    client_phone: DataTypes.INTEGER,
    client_dni: DataTypes.INTEGER,
    sale_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};