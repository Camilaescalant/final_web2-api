"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class superheroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      superheroes.belongsToMany(models.User,{
        through: models.User_Superheroe,
      })
    }
  }
  superheroes.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      intelligence: DataTypes.INTEGER,
      strength: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      durability: DataTypes.INTEGER,
      power: DataTypes.INTEGER,
      combat: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      imagexs: DataTypes.STRING,
      imagesm: DataTypes.STRING,
      imagemd: DataTypes.STRING,
      imagelg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "superheroes",
    }
  );
  return superheroes;
};
