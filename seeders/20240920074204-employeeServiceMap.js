"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("employee_services", [
      // Employee 7 (Sanjay) handles multiple services
      {
        employee_Id: 5,
        service_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 3,
        service_Id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Employee 8 (Sunita) handles multiple services
      {
        employee_Id: 2,
        service_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 2,
        service_Id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Employee 9 (Ravi) handles multiple services
      {
        employee_Id: 4,
        service_Id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 6,
        service_Id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Employee 10 (Kiran) handles multiple services
      {
        employee_Id: 1,
        service_Id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 1,
        service_Id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Employee 11 (Raj) handles a single service
      {
        employee_Id: 2,
        service_Id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Employee 12 (Divya) handles a single service
      {
        employee_Id: 3,
        service_Id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employee_services", null, {});
  },
};
