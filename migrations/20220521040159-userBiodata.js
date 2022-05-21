'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('userBiodata', 'userBiodata_pkey');
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.addConstraint('myTable', {
      fields: ['id_user'],
      type: 'PRIMARY KEY',
      name: 'userBiodata_pkey'
    });
  }
};
