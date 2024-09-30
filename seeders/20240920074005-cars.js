"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("cars", [
      {
        model: "Maruti Suzuki Swift",
        price: 500000,
        manufactureYear: "2018-01-15",
        mileage: 20.5,
        location: 100001, // Updated to 100001
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Hyundai i20",
        price: 600000,
        manufactureYear: "2019-06-10",
        mileage: 18.0,
        location: 200001,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Honda City",
        price: 900000,
        manufactureYear: "2020-03-05",
        mileage: 15.5,
        location: 300001,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Toyota Innova",
        price: 1500000,
        manufactureYear: "2021-08-22",
        mileage: 12.5,
        location: 400001,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Tata Nexon",
        price: 700000,
        manufactureYear: "2020-12-12",
        mileage: 17.5,
        location: 500001,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Mahindra Thar",
        price: 1500000,
        manufactureYear: "2022-07-19",
        mileage: 14.0,
        location: 600001,
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cars", null, {});
  },
};
