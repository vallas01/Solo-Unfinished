'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    cost: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, { foreignKey: 'ownerId' });
    Business.hasMany(models.Review, { foreignKey: 'businessId' });
  };
  return Business;
};
