'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {userId: 1, businessId: 1, rating: 2, content: 'We love this marina.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 2, rating: 3, content: 'Fantastic service and beautiful views!!!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 3, rating: 4, content: 'This marina was amazing!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 4, rating: 4, content: 'The food at this marina was amazing.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 2, businessId: 5, rating: 5, content: 'We had a nice time!', createdAt: new Date(), updatedAt: new Date()},
     {userId: 3, businessId: 1, rating: 2, content: 'The marina is too crowded.', createdAt: new Date(), updatedAt: new Date()},
     {userId: 1, businessId: 2, rating: 5, content: 'The service we had done on our boat was top notch.', createdAt: new Date(), updatedAt: new Date()},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
