"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("super_powers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameSuperPower: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "name_super_power",
      },
      superHumanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "super_human_id",
        references: {
          model: {
            tableName: "super_humans",
          },
          key: "id",
        },
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
    await queryInterface.dropTable("super_powers");
  },
};
