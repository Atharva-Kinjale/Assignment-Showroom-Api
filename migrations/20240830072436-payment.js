"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("payments", {
      payment_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_Id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "orderDetails",
          key: "order_Id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      paymentType: {
        type: Sequelize.ENUM("cash", "online", "check", "loan"),
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.ENUM("success", "processing", "failed"),
        allowNull: false,
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
    await queryInterface.dropTable("payments");
  },
};
