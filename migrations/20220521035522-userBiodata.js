'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('userBiodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('userBiodata');
  }
};
