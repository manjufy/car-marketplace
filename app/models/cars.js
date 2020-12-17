"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define("cars", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    year: {
      type: DataTypes.INTEGER
    },
    make: {
      type: DataTypes.STRING(100)
    },
    model: {
      type: DataTypes.STRING(150)
    },
    reg_no: {
      type: DataTypes.STRING(20)
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title : {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price_type: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    transmission: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fuel_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING(100), // [Compact, Standard, Premium]. Allow administrator to define the class
      allowNull: true,
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

  return Cars;
};