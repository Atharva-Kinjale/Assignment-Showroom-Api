"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("employees", [
      {
        user_Id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_Id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
  },
};
