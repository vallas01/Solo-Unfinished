'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    user_id: DataTypes.INTEGER,
    marina_id: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, {foreignKey: 'user_id'});
    Booking.belongsTo(models.Marina, {foreignKey: 'marina_id'});
  };
  return Booking;
};
