'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class
  refund extends Model {

    static associate(models) {

      // 1:M relacion de pertenencia || sale
      refund.belongsTo(models.sale,{

        foreignKey: 'id_sale'
      })
      // 1: M | transaction
      refund.hasMany(models.transaction,{
        foreignKey: 'id_refund'
      })
    }
  }
  refund.init({
    id_sale: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    client_phone: DataTypes.INTEGER,
    client_dni: DataTypes.INTEGER,
    refund_total: DataTypes.INTEGER,
    refund_reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'refund',
  });
  return refund;
};