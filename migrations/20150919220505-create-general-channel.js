'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    migration.createTable(
      'general',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        attachments: {
          type: Sequelize.JSON
        },
        text: {
          type: Sequelize.STRING
        },
        ts: {
          type: Sequelize.FLOAT
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    migration.dropTable('general')
  }
};