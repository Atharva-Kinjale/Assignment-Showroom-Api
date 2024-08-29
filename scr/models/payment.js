const { sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

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

module.exports = Payment;
