'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Marinas', [
      {
      user_id: 5,
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
        user_id: 5,
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
        user_id: 5,
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
        user_id: 5,
        name: 'The Yacht Club of Hilton Head',
        state: 'SC',
        country: 'USA',
        cost: 2.85,
        latitude: 32.17739,
        longitude: -80.77239,
        imagePath: "https://upscalelivingmag-com-images.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/sailboat-racing.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          user_id: 5,
          name: 'Grand Bahama Yacht Club',
          state: 'Grand Bahama',
          country: 'Bahamas',
          cost: 2.85,
          latitude: 26.51814,
          longitude: -78.63648,
          imagePath: "https://res.cloudinary.com/dockwa/image/upload/c_scale,w_800/v1/marinas/grandbahamayachtclub/GBI_0470.png",
          createdAt: new Date(),
          updatedAt: new Date()
          }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Marinas');
  }
};
