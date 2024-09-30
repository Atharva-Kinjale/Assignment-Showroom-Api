"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("orderDetails", [
      {
        employee_Id: 1,
        customer_Id: 1,
        car_Id: 1,
        amount: 500000,
        orderDate: "2023-08-01",
        location: 100001, // Updated to 100001
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 1,
        customer_Id: 2,
        car_Id: 2,
        amount: 600000,
        orderDate: "2023-08-05",
        location: 200001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 3,
        customer_Id: 3,
        car_Id: 3,
        amount: 900000,
        orderDate: "2023-08-10",
        location: 300001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 2,
        customer_Id: 4,
        car_Id: 4,
        amount: 1500000,
        orderDate: "2023-08-15",
        location: 400001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 2,
        customer_Id: 5,
        car_Id: 5,
        amount: 700000,
        orderDate: "2023-08-20",
        location: 500001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_Id: 5,
        customer_Id: 6,
        car_Id: 6,
        amount: 1500000,
        orderDate: "2023-08-25",
        location: 600001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orderDetails", null, {});
  },
};

// stat from here
