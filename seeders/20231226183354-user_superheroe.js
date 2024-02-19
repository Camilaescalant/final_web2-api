'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_superheroe", [
      {
        userId: 1,
        superheroId: 1,
      },
      {
        userId: 1,
        superheroId: 20,
      },
      {
        userId: 1,
        superheroId: 30,
      },
      {
        userId: 1,
        superheroId: 35,
      },
      {
        userId: 1,
        superheroId: 17,
      },
      {
        userId: 2,
        superheroId: 15,
      },
      {
        userId: 2,
        superheroId: 20,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

