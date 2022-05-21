'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      date_start: {
        type: Sequelize.DATE
      },
      last_played: {
        type: Sequelize.DATE
      },
      score: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('userHistories', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'userHistories_fkey',
      references: {
        table: 'userGames',
        field: 'user_id'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userHistories');
  }
};