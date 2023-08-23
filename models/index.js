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

/*
db.facilities = require('./facility.model.js')(sequelize, Sequelize);
db.patients = require('./patient.model')(sequelize, Sequelize);
db.records = require('./record.model')(sequelize, Sequelize);
db.treatments = require('./treatment.model')(sequelize, Sequelize);
db.weights = require('./weights.model')(sequelize, Sequelize);
*/

module.exports = db;
