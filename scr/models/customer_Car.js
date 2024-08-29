const { sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

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
    },
    car_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Customer_Car;
