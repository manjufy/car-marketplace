'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('availabilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'cars',
          },
          key: 'id'
        },
      },
      from_datetime: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      to_datetime: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        unique: true
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
    await queryInterface.dropTable('availabilities');
  }
};