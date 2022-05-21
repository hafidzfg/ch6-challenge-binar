'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('userBiodata', {
      fields: ['id_user'],
      type: 'primary key',
      name: 'userBiodata_pkey'
    });
  },

  async down (queryInterface, Sequelize) {
    
    //  await queryInterface.dropTable('userBiodata');
     
  }
};
