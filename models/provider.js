'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // 1:M | product
      provider.hasMany(models.product,{
        foreignKey:'id_provider'
      })
      // 1:M | provider
      provider.hasMany(models.purchase,{
        foreignKey: 'id_provider'
      })
    }
  }
  provider.init({
    name_brand: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'provider',
  });
  return provider;
};