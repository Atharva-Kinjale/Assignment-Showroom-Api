const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const Location = require("./location");
const Employee = require("./employee");
const Customer = require("./customerModel");
const Car = require("./carsModel");
const Payment = require("./payment");

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
      references: {
        model: "employees",
        key: "employee_Id",
      },
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
      unique: true,
      allowNull: false,
      references: {
        model: "cars",
        key: "car_Id",
      },
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
      references: {
        model: "Location",
        key: "pincode",
      },
    },
  },
  {
    paranoid: true,
  }
);
// ASSOCIATIONS

// OrderDetails.belongsTo(Location,{foreignKey:'location'})
OrderDetails.belongsTo(Employee, { foreignKey: "employee_Id" });
// OrderDetails.belongsTo(Customer, { foreignKey: "customer_id" });
// OrderDetails.belongsTo(Car, { foreignKey: "car_id" });
// OrderDetails.hasOne(Payment, { foreignKey: "payment_Id" });
module.exports = OrderDetails;
