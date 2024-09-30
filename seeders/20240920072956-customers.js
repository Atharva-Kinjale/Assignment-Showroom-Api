"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("customers", [
      {
        user_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
