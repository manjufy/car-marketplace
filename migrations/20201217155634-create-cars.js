'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING(100)
      },
      model: {
        type: Sequelize.STRING(150)
      },
      reg_no: {
        type: Sequelize.STRING(20)
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      location: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title : {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      price_type: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      doors: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      passengers: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      transmission: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      fuel_type: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      class: {
        type: Sequelize.STRING(100), // [Compact, Standard, Premium]. Allow administrator to define the class
        allowNull: true,
      },
      status: Sequelize.STRING(10),
      active: Sequelize.BOOLEAN,
      additional_info: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');
  }
};