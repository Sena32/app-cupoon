'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Cupons', 'userId', {
          type: Sequelize.DataTypes.INTEGER,
          reference:{
            model:'Users',
            Key:'id'
          },
          allowNull:false
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Cupons', 'userId', { transaction: t }),
      ]);
    });
  }
};