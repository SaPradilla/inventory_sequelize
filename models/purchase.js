'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M | transaction
      purchase.hasMany(models.transaction,{
        foreignKey: 'id_purchase'
      })
      // 1:M relacion de pertenecia | provider
      purchase.belongsTo(models.provider,{
        foreignKey: 'id_provider'
        
      })
    }
  }
  purchase.init({
    id_provider: DataTypes.INTEGER,
    total_purchase: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'purchase',
  });
  return purchase;
};