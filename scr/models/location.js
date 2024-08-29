const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

exports.Location = sequelize.define(
  "location",
  {
    Pincode: { type: DataTypes.INTEGER, primaryKey: true },
    city: { type: DataTypes.STRING, allowNull: false },
    State: { type: DataTypes.STRING, allowNull: false },
    Country: { type: DataTypes.STRING, allowNull: false },
  },
  {
    paranoid: true,
  }
);
module.exports = Location;
