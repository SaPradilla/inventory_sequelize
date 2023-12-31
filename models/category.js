'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1 product
      category.hasMany(models.product,{
        foreignKey:'id_category'
      })
    }
  }
  category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};