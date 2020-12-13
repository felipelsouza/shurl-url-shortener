'use strict';

const shortId = require('shortid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('url_shortener', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      full_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      short_url: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: shortId.generate
      },
      clicks: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('url_shortener');
  }
};
