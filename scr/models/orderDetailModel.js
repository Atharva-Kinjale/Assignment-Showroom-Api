const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const OrderDetails = sequelize.define(
  "orderDetails",
  {
    order_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customer_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    car_Id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = OrderDetails;
