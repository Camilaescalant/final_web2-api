"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Test User",
        email: "test@test.com",
        password:
          "$2b$10$pIVGiLebgpEmb6apa8IdaeimB78RfExGzdoxxNemiRUBpvJJanLtO",
        photoUrl: "",
        rol: 2,
        nickname: "TEST",
      },
      {
        name: "Admin Test",
        email: "test@admin.com",
        password:
          "$2b$10$pIVGiLebgpEmb6apa8IdaeimB78RfExGzdoxxNemiRUBpvJJanLtO",
        photoUrl: "",
        rol: 1,
        nickname: "ADMIN_TEST",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
