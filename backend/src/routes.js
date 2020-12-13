const express = require('express');
const urlShortenerController = require('./controllers/UrlShortenerController');

const routes = express.Router();

routes.get('/', urlShortenerController.index);

routes.post('/shortUrl', urlShortenerController.create);
routes.get('/:shortUrl', urlShortenerController.redirect);

module.exports = routes;