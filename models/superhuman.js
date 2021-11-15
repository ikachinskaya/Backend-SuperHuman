"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SuperHuman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuperHuman.init(
    {
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nick_name",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "real_name",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.TEXT,
        field: "origin_description",
      },
      catchPhrase: {
        type: DataTypes.STRING,
        field: "catch_phrase",
      },
    },
    {
      sequelize,
      modelName: "SuperHuman",
      tableName: "super_humans",
      underscored: true,
    }
  );
  return SuperHuman;
};
