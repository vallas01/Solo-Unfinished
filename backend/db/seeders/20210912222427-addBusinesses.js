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
       title: 'Waikiki Yacht Club',
       imgUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-uopload-reid-callaway.jpg',
       category: 'Private',
       description: 'Easy access.',
       address: '1599 Ala Moana Blvd',
       city: 'Honolulu',
       state: 'HA',
       zipCode: 'USA',
       lat: 0.0,
       lng: 0.0,
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {ownerId: 2, title: 'The Yacht Club of Hilton Head',
     imgUrl: 'https://upscalelivingmag-com-images.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/sailboat-racing.jpg',
      category: 'Transient', description: 'Beautiful', address: '99 Helmsman Way', city: 'Hilton Head Island', state: 'SC', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 3, title: 'Delray Harbour Club Marina',
     imgUrl:  'https://img.marinas.com/v2/865482a619e67f4c67041997880ad09fb363febcec073c0c1899e457aaa7029d.jpg',
      category: 'Public', description: 'Right on the Intercoastal', address: '1035 S. Federal Highway', city: 'Delray Beach', state: 'FL', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 4, title: 'Bonefish Marina',
     imgUrl: 'https://img.marinas.com/v2/cf91105d12bfbf4ae0b927be1116f0249c308c14a2fdc4086f1e463058d09852.jpg',
      category: 'Public', description: 'Enjo but please do not anchor on a reef', address: '97 Coco Plum Drive', city: 'Marathon', state: 'FL', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 5, title: 'Grand Bahama Yacht Club',
     imgUrl: 'https://res.cloudinary.com/dockwa/image/upload/c_scale,w_800/v1/marinas/grandbahamayachtclub/GBI_0470.png',
      category: 'Private', description: 'Reservation recommended', address: 'none', city: 'Freeport', state: 'BA', zipCode: 'Baham', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 6, title: 'Marbella Yacht Club', imgUrl: '0',
      category: 'Transient', description: 'Shallow marina', address: '320 Harbour Blvd', city: 'Destin', state: 'FL', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 7, title: 'Hampton Yacht Club', imgUrl: '0',
      category: 'Private', description: 'Shallow marina', address: '4707 Victoria Club', city: 'Hampton', state: 'VA', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 8, title: 'Carolina Yacht Club', imgUrl: '0',
      category: 'Private', description: 'Shallow marina', address: '401 S Lumina Ave', city: 'Wrightsville Beach', state: 'NC', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 9, title: 'Vineyard Haven Marina', imgUrl: '0',
      category: 'Public', description: 'Crowded', address: '52 Beach Road', city: 'Vineyard Haven', state: 'MA', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},
     {ownerId: 10, title: 'Rhode Island Yacht Club', imgUrl: '0',
      category: 'Transient', description: 'Shallow marina', address: '1 Ocean Ave', city: 'Cranston', state: 'RI', zipCode: 'USA', lat: 0.0, lng: 0.0, createdAt: new Date(), updatedAt: new Date()},


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
