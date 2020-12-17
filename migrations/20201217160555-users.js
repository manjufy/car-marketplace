'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
      },
      password: {
          type: Sequelize.STRING(64),
          is: /^[0-9a-f]{64}$/i
      },
      full_name: {
          type: Sequelize.STRING(100),
          allowNull: false
      },
      phone: Sequelize.STRING(15),
      address: Sequelize.STRING,
      city: Sequelize.STRING(50),
      state: Sequelize.STRING(100),
      status: Sequelize.STRING(10),
      active: Sequelize.BOOLEAN,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
