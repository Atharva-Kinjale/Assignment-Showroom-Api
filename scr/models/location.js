const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");
const User = require("./user");
const Car = require("./carsModel");
const Services = require("./services");
const OrderDetails = require("./orderDetailModel");

const Location = sequelize.define(
  "Location",
  {
    pincode: { type: DataTypes.INTEGER, primaryKey: true },
    city: { type: DataTypes.STRING, allowNull: false },
    State: { type: DataTypes.STRING, allowNull: false },
    Country: { type: DataTypes.STRING, allowNull: false },
  },
  {
    paranoid: true,
    tableName: "Location",
  }
);
// Location.hasMany(User, { foreignKey: "Pincode" });
Location.hasMany(Car, { foreignKey: "location" });
Location.hasMany(Services, { foreignKey: "location" });
Location.hasMany(OrderDetails, { foreignKey: "location" });
module.exports = Location;
