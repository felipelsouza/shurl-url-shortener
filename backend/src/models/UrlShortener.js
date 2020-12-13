const { Model, DataTypes } = require('sequelize');
const shortId = require('shortid');

class UrlShortener extends Model {
    static init(sequelize) {
        super.init({
            full_url: DataTypes.STRING,
            short_url: {
                type: DataTypes.STRING,
                defaultValue: shortId.generate
            },
            clicks: DataTypes.INTEGER,
        }, {
            freezeTableName: true,
            tableName: 'url_shortener',
            underscored: true,
            sequelize
        });
    }
}

module.exports = UrlShortener;