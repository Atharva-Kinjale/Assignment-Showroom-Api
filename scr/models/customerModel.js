const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const User = require("./user");
const OrderDetails = require("./orderDetailModel");
const Customer_Car = require("./customer_Car");

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
      references: {
        model: "User",
        key: "user_Id",
      },
    },
  },

  {
    paranoid: true,
    tableName: "customer",
  }
);
// Customer.belongsTo(User, { foreignKey: "user_Id" });
// Customer.hasMany(OrderDetails, { foreignKey: "customer_id" });
// Customer.hasMany(Customer_Car, { foreignKey: "customer_Id" });
module.exports = Customer;
