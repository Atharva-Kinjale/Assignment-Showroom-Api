const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const User = require("./user");
const OrderDetails = require("./orderDetailModel");

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
      references: {
        model: "User",
        key: "user_Id",
      },
    },
  },
  {
    paranoid: true,
  }
);
// Employee.belongsTo(User, { foreignKey: "user_Id" });
// Employee.hasMany(OrderDetails, { foreignKey: "employee_Id" });
module.exports = Employee;
