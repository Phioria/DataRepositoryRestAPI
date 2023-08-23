const dbConfig = require('../config/db');

const Sequelize = require('sequelize'); // Actual sequelize package and functions
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { // This is the new database connection we'll be using
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

// wat?
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.records = require('./record-model.js')(sequelize, Sequelize);

module.exports = db;
