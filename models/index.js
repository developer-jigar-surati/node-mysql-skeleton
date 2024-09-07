const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const squelizeObj = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.squelizeObj = squelizeObj;

db.users = require("./users.model.js")(squelizeObj, Sequelize);

module.exports = db;