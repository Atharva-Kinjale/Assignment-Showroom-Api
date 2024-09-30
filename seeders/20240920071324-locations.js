"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("locations", [
      {
        pincode: "100001",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pincode: "200001",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pincode: "300001",
        city: "Kolkata",
        state: "West Bengal",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pincode: "400001",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pincode: "500001",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pincode: "600001",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  },
};
