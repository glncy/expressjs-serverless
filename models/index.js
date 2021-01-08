'use strict';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const { getModels } = require('./import');

const dialectModule = require('mysql2'); // DIALECT MODULE (NPM PACKAGE)

let sequelize = getModels({
    database: config.database,
    username: config.username,
    password: config.password,
    options: {
        host: config.host,
        dialect: config.dialect,
        dialectModule: dialectModule
    }
});

module.exports = sequelize;
