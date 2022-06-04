'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
   return queryInterface.bulkInsert('Businesses', [
     {ownerId: 1,
       name: 'Waikiki Yacht Club',
       imgUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-uopload-reid-callaway.jpg',
       cost: 2.20,
       description: 'Easy access.',
       address: '1599 Ala Moana Blvd',
       city: 'Honolulu',
       state: 'HA',
       country: 'USA',
       lat: 21.31,
       lng: -157.86,
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {ownerId: 1, name: 'The Yacht Club of Hilton Head',
     imgUrl: 'https://upscalelivingmag-com-images.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/sailboat-racing.jpg',
      cost: 2.25, description: 'Beautiful', address: '99 Helmsman Way', city: 'Hilton Head Island', state: 'SC', country: 'USA', lat: 43.8210, lng: -89.0214, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 1, name: 'Delray Harbour Club Marina',
     imgUrl:  'https://img.marinas.com/v2/865482a619e67f4c67041997880ad09fb363febcec073c0c1899e457aaa7029d.jpg',
      cost: 2.35, description: 'Right on the Intercoastal', address: '1035 S. Federal Highway', city: 'Delray Beach', state: 'FL', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 4, name: 'Bonefish Marina',
     imgUrl: 'https://img.marinas.com/v2/cf91105d12bfbf4ae0b927be1116f0249c308c14a2fdc4086f1e463058d09852.jpg',
      cost: 2.15, description: 'Enjoy, fun party!', address: '97 Coco Plum Drive', city: 'Marathon', state: 'FL', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 5, name: 'Grand Bahama Yacht Club',
     imgUrl: 'https://res.cloudinary.com/dockwa/image/upload/c_scale,w_800/v1/marinas/grandbahamayachtclub/GBI_0470.png',
      cost: 2.95, description: 'Reservation recommended', address: 'none', city: 'Freeport', state: 'BA', country: 'Bahamas', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 6, name: 'Marbella Yacht Club', imgUrl: 'https://img.marinas.com/v2/4b0522c1b8575a1f988771c9f4d7adec1c6732f382b7ecc3e51bd29d390b87d2.jpg',
      cost: 2.27, description: 'Shallow marina', address: '320 Harbour Blvd', city: 'Destin', state: 'FL', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 7, name: 'Hampton Yacht Club', imgUrl: 'https://img.marinas.com/v2/0b6090f48ab10f15b4946510d813af9d9535ff618d450b4de908c5c0c23e0d62.jpg',
      cost: 2.35, description: 'Shallow marina', address: '4707 Victoria Club', city: 'Hampton', state: 'VA', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 8, name: 'Carolina Yacht Club', imgUrl: 'https://img.marinas.com/v2/d367650ece5cbdaee860fc2925beff55b2784e9db2f38bf7174fffe478a40be6.jpg',
      cost: 2.45, description: 'Shallow marina', address: '401 S Lumina Ave', city: 'Wrightsville Beach', state: 'NC', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 9, name: 'Vineyard Haven Marina', imgUrl: 'https://img.marinas.com/v2/d367650ece5cbdaee860fc2925beff55b2784e9db2f38bf7174fffe478a40be6.jpg',
      cost: 2.45, description: 'Crowded', address: '52 Beach Road', city: 'Vineyard Haven', state: 'MA', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 10, name: 'Rhode Island Yacht Club', imgUrl: 'https://img.marinas.com/v2/d367650ece5cbdaee860fc2925beff55b2784e9db2f38bf7174fffe478a40be6.jpg',
      cost: 2.41, description: 'Shallow marina', address: '1 Ocean Ave', city: 'Cranston', state: 'RI', country: 'USA', lat: 43.1023, lng: -89.2301, createdAt: new Date(), updatedAt: new Date()},


   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
   return queryInterface.bulkDelete('Businesses', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
