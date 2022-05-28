'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('Marinas', [
      {
      userId: 1,
      name: 'Delray Harbour Club Marina',
      state: 'FL',
      country: 'USA',
      cost: 2.25,
      latitude: 26.44556,
      longitude: -80.06589,
      imagePath: "https://img.marinas.com/v2/865482a619e67f4c67041997880ad09fb363febcec073c0c1899e457aaa7029d.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('Marinas', null, {});
  }
};
