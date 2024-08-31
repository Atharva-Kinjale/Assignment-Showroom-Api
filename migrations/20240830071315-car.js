"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars", {
      car_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      manufactureYear: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      mileage: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: null,
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
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("cars");
  },
};
