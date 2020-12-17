"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING(64),
          is: /^[0-9a-f]{64}$/i
      },
      full_name: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
      phone: DataTypes.STRING(15),
      address: DataTypes.STRING,
      city: DataTypes.STRING(50),
      state: DataTypes.STRING(100),
      status: DataTypes.STRING(10),
      active: DataTypes.BOOLEAN,
  });

  return Users;
};