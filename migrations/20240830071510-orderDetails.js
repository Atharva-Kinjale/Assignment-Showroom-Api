"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orderDetails", {
      order_Id: {
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
      customer_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "customers",
          key: "customer_Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      car_Id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "cars",
          key: "car_Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      location: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "locations",
          key: "pincode",
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
    await queryInterface.dropTable("orderDetails");
  },
};
