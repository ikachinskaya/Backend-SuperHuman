"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("super_humans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: "nick_name",
      },
      realName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: "real_name",
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: "origin_description",
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("super_humans");
  },
};
