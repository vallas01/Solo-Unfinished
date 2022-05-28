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
      {
        userId: 2,
        name: 'Bonefish Marina',
        state: 'FL',
        country: 'USA',
        cost: 2.75,
        latitude: 24.725,
        longitude: -81.01209,
        imagePath: "https://img.marinas.com/v2/cf91105d12bfbf4ae0b927be1116f0249c308c14a2fdc4086f1e463058d09852.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        userId: 3,
        name: 'Waikiki Yacht Club',
        state: 'HA',
        country: 'USA',
        cost: 2.75,
        latitude: 21.28534,
        longitude: -157.8413,
        imagePath: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-uopload-reid-callaway.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        userId: 4,
        name: 'The Yacht Club of Hilton Head',
        state: 'SC',
        country: 'USA',
        cost: 2.85,
        latitude: 32.17739,
        longitude: -80.77239,
        imagePath: "https://s3.amazonaws.com/images.charitybuzz.com/images/294045/original.jpeg?1493215857",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          userId: 5,
          name: 'Grand Bahama Yacht Club',
          state: 'Grand Bahama',
          country: 'Bahamas',
          cost: 2.85,
          latitude: 26.51814,
          longitude: -78.63648,
          imagePath: "https://duckduckgo.com/?q=grand+bahama+yacht+club+superyacht&atb=v314-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fres.cloudinary.com%2Fdockwa%2Fimage%2Fupload%2Fc_scale%2Cw_800%2Fv1%2Fmarinas%2Fgrandbahamayachtclub%2Fil-lussuoso-grand-bahama-yacht-club.png",
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
