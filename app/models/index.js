'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
let dbConfig = require('../../config')[env].db;
if (!dbConfig) {
  throw Error(`Missing DB configuration`);
}

const db = {};

// make column names snake cased
dbConfig = {
  ...dbConfig,
  define: {
    underscored: true
  }
};

const sequelize = new Sequelize(
  dbConfig.user,
  dbConfig.password,
  dbConfig.database,
  dbConfig
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
