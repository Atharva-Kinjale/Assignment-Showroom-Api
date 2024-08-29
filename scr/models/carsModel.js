const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

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

module.exports = Car;
