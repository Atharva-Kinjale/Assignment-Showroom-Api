"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("services", [
      {
        serviceName: "Oil Change",
        timeRequired: "01:00:00",
        description: "Regular oil change service",
        cost: 1500,
        location: 100001, // Updated to 100001
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        serviceName: "Tire Replacement",
        timeRequired: "02:00:00",
        description: "Replace all four tires",
        cost: 10000,
        location: 200001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        serviceName: "Brake Inspection",
        timeRequired: "01:30:00",
        description: "Complete brake system inspection",
        cost: 3000,
        location: 300001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        serviceName: "Battery Replacement",
        timeRequired: "00:45:00",
        description: "Replace car battery",
        cost: 5000,
        location: 400001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("services", null, {});
  },
};
