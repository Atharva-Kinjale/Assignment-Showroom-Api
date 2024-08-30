const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const OrderDetails = require("./orderDetailModel");

const Payment = sequelize.define(
  "payment",
  {
    payment_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_Id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: "orderDetails",
        key: "order_Id",
      },
    },
    paymentType: {
      type: DataTypes.ENUM("cash", "online", "check", "loan"),
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM("success", "processing", "failed"),
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);
// Payment.belongsTo(OrderDetails, { foreignKey: "payment_Id" });
module.exports = Payment;
