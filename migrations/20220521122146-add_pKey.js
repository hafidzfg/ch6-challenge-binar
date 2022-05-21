'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('userBiodata', {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'userBiodata_fkey',
      references: {
        table: 'userGames',
        field: 'user_id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('userBiodata', {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'userBiodata_fkey',
      references: {
        table: 'userGames',
        field: 'user_id'
      }
    });
  }
};
