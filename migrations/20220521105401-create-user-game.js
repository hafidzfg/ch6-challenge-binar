'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
        validate: {
          notNull: {
            msg: 'Please enter your email'
          }
        },
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your email'
          },
          isEmail: true
        },
        isEmail: true,
        notEmpty: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your password'
          }
        },
        type: Sequelize.STRING
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userGames');
  }
};