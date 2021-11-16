"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SuperPowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SuperPowers.belongsTo(models.SuperHuman, {
        foreignKey: "superHumanId",
      });
    }
  }
  SuperPowers.init(
    {
      nameSuperPowers: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name_super_powers",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      superHumanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "super_human_id",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "SuperPowers",
      underscored: true,
      tableName: "super_powers",
    }
  );
  return SuperPowers;
};
