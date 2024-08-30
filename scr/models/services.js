const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const Location = require("./location");
const Car_Services = require("./car_Services");
const Employee_Services = require("./employee_Services");

const Services = sequelize.define(
  "service",
  {
    service_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    serviceName: {
      type: DataTypes.STRING,
      defaultValue: null,
      unique: true,
    },
    timeRequired: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      //   allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL,
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

// ASSOCIATION
// Services.belongsTo(Location, { foreignKey: "location" });
// Services.hasMany(Car_Services, { foreignKey: "service_Id" });
// Services.hasMany(Employee_Services, { foreignKey: "service_Id" });
module.exports = Services;
