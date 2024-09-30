"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("car_services", [
      // Car 1 (Maruti Suzuki Swift) is assigned multiple services
      {
        car_Id: 1,
        service_Id: 1,
        isInService: true, // Oil Change for Car 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_Id: 1,
        service_Id: 2,
        isInService: false, // Tire Replacement for Car 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Car 2 (Hyundai i20) is assigned multiple services
      {
        car_Id: 2,
        service_Id: 1,
        isInService: true, // Oil Change for Car 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_Id: 2,
        service_Id: 3,
        isInService: false, // Brake Inspection for Car 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Car 3 (Honda City) is assigned a single service
      {
        car_Id: 3,
        service_Id: 4,
        isInService: true, // Battery Replacement for Car 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Car 4 (Toyota Innova) is assigned multiple services
      {
        car_Id: 4,
        service_Id: 2,
        isInService: true, // Tire Replacement for Car 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_Id: 4,
        service_Id: 3,
        isInService: false, // Brake Inspection for Car 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Car 5 (Tata Nexon) is assigned a single service
      {
        car_Id: 5,
        service_Id: 1,
        isInService: true, // Oil Change for Car 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Car 6 (Mahindra Thar) is assigned multiple services
      {
        car_Id: 6,
        service_Id: 3,
        isInService: true, // Brake Inspection for Car 6
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_Id: 6,
        service_Id: 4,
        isInService: false, // Battery Replacement for Car 6
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("car_services", null, {});
  },
};
