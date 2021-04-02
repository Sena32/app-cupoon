'use strict';
const {
  Model
} = require('sequelize');
const { default: Cupon } = require('./Cupon');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.Coupons = User.hasMany(models.Coupon, {foreignKey: 'couponId', as: 'coupons'});
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};