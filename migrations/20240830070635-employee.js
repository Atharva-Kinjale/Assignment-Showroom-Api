"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employees", {
      employee_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "users",
          key: "user_Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      createdBy: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      updatedBy: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    //

    // Drop the table
    await queryInterface.dropTable("employees");
  },
};
