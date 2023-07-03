'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class adjustment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1: M | transaction
      adjustment.hasMany(models.transaction,{
        foreignKey: 'id_adjustment'
      })
    }
  }
  adjustment.init({
    reason_adjustment: DataTypes.STRING,
    date_adjustment: DataTypes.DATE,
    quantity_adjustment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'adjustment',
  });
  return adjustment;
};