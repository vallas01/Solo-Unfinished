'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake3@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake4@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake5@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake6@user.io',
        username: 'FakeUser6',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake7@user.io',
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake8@user.io',
        username: 'FakeUser8',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fake9@user.io',
        username: 'FakeUser9',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
