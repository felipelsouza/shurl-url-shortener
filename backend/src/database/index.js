const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UrlShortener = require('../models/UrlShortener');

const connection = new Sequelize(dbConfig);

UrlShortener.init(connection);

module.exports = connection;