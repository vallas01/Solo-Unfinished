'use strict';
module.exports = (sequelize, DataTypes) => {
  const Marina = sequelize.define('Marina', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    imagePath: DataTypes.STRING
  }, {});
  Marina.associate = function(models) {
    // associations can be defined here
  };
  return Marina;
};