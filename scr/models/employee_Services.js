const { sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const Employee_Services = sequelize.define(
  "employee_services",
  {
    employee_services_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Employee_Services;
