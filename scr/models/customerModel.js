const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const Customer = sequelize.define(
  "customer",
  {
    customer_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

module.exports = Customer;
