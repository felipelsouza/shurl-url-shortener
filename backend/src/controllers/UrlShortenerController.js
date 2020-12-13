const UrlShortener = require('../models/UrlShortener');

module.exports = {
    async index(req, res) {
        try {
            const urls = await UrlShortener.findAll();
            return res.status(200).send(urls);
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async create(req, res) {
        try {
            const { full_url } = req.body;
            const urlShortener = await UrlShortener.create({ full_url });
            return res.status(201).send(urlShortener);
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async redirect(req, res) {
        const shortUrl = await UrlShortener.findOne({
            where: {
                short_url: req.params.shortUrl
            }
        });

        if (shortUrl === null) {
            return res.status(404).send('Page not found');
        }

        shortUrl.clicks++;
        shortUrl.save();

        res.redirect(shortUrl.full_url);
    }
};