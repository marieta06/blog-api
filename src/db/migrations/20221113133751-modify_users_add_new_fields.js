'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
     await queryInterface.addColumn('users', 'lastName',  {
         type: Sequelize.STRING,
         allowNull: true,
          after: 'createdAt'
     });
      await queryInterface.addColumn(
          'users',
          'age', {
              type: Sequelize.INTEGER,
              allowNull: true
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
     await queryInterface.removeColumn('users','lastName');
     await queryInterface.removeColumn('users','age');
  }
};
