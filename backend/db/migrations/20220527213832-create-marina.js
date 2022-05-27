'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Marinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      state: {
        type: Sequelize.STRING(2)
      },
      country: {
        type: Sequelize.STRING(20)
      },
      cost: {
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imagePath: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Marinas');
  }
};
