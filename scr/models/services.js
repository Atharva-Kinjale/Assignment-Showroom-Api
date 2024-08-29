const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const Services = sequelize.define(
  "Services",
  {
    services_Id: {
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
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Services;
