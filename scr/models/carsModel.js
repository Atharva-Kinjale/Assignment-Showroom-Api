const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const Location = require("./location");
const OrderDetails = require("./orderDetailModel");
const Customer_Car = require("./customer_Car");
const Car_Services = require("./car_Services");

const Car = sequelize.define(
  "car",
  {
    car_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    manufactureYear: {
      type: DataTypes.DATE,
    },
    mileage: {
      type: DataTypes.DECIMAL,
      defaultValue: null,
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Location",
        key: "pincode",
      },
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    paranoid: true,
  }
);
// ASSOCIATIONs

// Car.belongsTo(Location, { foreignKey: "location" });
Car.hasMany(OrderDetails, { foreignkey: "car_Id" });
Car.hasMany(Customer_Car, { foreignkey: "car_Id" });
// Car.hasMany(Car_Services, { foreignKey: "car_id" });
module.exports = Car;
