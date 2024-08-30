const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const Customer = require("./customerModel");
const Car = require("./carsModel");

const Customer_Car = sequelize.define(
  "customer_car",
  {
    customer_car_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "customer",
        key: "customer_Id",
      },
    },
    car_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cars",
        key: "car_Id",
      },
    },
  },
  {
    paranoid: true,
  }
);
// Customer_Car.belongsTo(Customer, { foreignKey: "customer_Id" });
// Customer_Car.belongsTo(Car, { foreignKey: "car_Id" });
module.exports = Customer_Car;
