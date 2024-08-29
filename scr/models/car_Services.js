const { sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const Car_Services = sequelize.define(
  "car_services",
  {
    car_services_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    services_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    car_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = Car_Services;
