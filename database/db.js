const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pw_1", "root", "toor", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: 0,
});

module.exports = sequelize;
