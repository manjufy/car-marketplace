'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'created_at', {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        }, 
        { 
            transaction: t 
        }),
        queryInterface.addColumn('users', 'updated_at', {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        { 
          transaction: t 
        })
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'created_at', { transaction: t }),
        queryInterface.removeColumn('users', 'updated_at', { transaction: t })
      ]);
    });
  }
};
