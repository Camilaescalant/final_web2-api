"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },

      intelligence: {
        type: Sequelize.INTEGER,
      },
      strength: {
        type: Sequelize.INTEGER,
      },
      speed: {
        type: Sequelize.INTEGER,
      },
      durability: {
        type: Sequelize.INTEGER,
      },
      power: {
        type: Sequelize.INTEGER,
      },
      combat: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      imagexs: {
        type: Sequelize.STRING,
      },
      imagesm: {
        type: Sequelize.STRING,
      },
      imagemd: {
        type: Sequelize.STRING,
      },
      imagelg: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superheroes");
  },
};
