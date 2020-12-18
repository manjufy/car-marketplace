"use strict";
module.exports = (sequelize, DataTypes) => {
  const Availabilities = sequelize.define("availabilities", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      },
    },
    from_datetime: {
        allowNull: false,
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    to_datetime: {
        allowNull: false,
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    },
    status: DataTypes.STRING(10),
    active: DataTypes.BOOLEAN,
    additional_info: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
    }
  },
  // change to snake-case
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
  );

  return Availabilities;
};