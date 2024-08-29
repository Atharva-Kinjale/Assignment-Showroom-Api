const { sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const Employee = sequelize.define(
  "employee",
  {
    employee_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Employee;
