"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payments", [
      {
        order_Id: 1,
        paymentType: "online",
        paymentStatus: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_Id: 2,
        paymentType: "cash",
        paymentStatus: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_Id: 3,
        paymentType: "loan",
        paymentStatus: "processing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_Id: 4,
        paymentType: "online",
        paymentStatus: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_Id: 5,
        paymentType: "check",
        paymentStatus: "failed",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_Id: 6,
        paymentType: "loan",
        paymentStatus: "success",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  },
};
