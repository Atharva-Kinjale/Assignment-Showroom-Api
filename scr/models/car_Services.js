const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const Car = require("./carsModel");
const Services = require("./services");

const Car_Services = sequelize.define(
  "car_services",
  {
    car_services_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    service_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "services",
        key: "service_id",
      },
    },
    car_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cars",
        key: "car_id",
      },
    },
    isInService: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    paranoid: true,
  }
);
// ASSOCIATIONS
// Car_Services.belongsTo(Car, { foreignKey: "car_id" });
// Car_Services.belongsTo(Services, { foreignKey: "service_id" });

module.exports = Car_Services;
