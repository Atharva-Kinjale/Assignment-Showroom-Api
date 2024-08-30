const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const Services = require("./services");
const Employee = require("./employee");

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
      references: {
        model: "employees",
        key: "employee_id",
      },
    },
    service_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "services",
        key: "service_id",
      },
    },
  },
  {
    paranoid: true,
  }
);
// Employee_Services.belongsTo(Services, { foreignKey: "service_Id" });
// Employee_Services.belongsTo(Employee, { foreignKey: "employee_Id" });
module.exports = Employee_Services;
