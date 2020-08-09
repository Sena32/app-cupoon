'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('cupons', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false,
      },
      expirationDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      useDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM,
        values: ['active', 'expired', 'utilized'],
        defaultValue: 'active',
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      }
    });

  },

  down: async (queryInterface) => {

    await queryInterface.dropTable('cupons');

  }
};
