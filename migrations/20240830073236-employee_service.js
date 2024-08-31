"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employee_services", {
      employee_services_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      employee_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "employees",
          key: "employee_Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      service_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "services",
          key: "service_Id",
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
    // Drop the table
    await queryInterface.dropTable("employee_services");
  },
};
