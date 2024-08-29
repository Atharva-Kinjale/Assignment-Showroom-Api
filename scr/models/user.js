const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const User = sequelize.define(
  "user",
  {
    user_Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    F_Name: { type: DataTypes.STRING, allowNull: false },
    L_Name: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, defaultValue: null, unique: true },
    Contact_No: { type: DataTypes.STRING, allowNull: false },
    Gender: { type: DataTypes.ENUM("male", "female", "other") },
    Pincode: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE, default: DataTypes.NOW },
    updatedAt: DataTypes.DATE,
    createdBy: DataTypes.STRING,
    updatedBy: { type: DataTypes.STRING, defaultValue: null },
    deletedBy: { type: DataTypes.STRING, defaultValue: null },
  },
  {
    paranoid: true,
  }
);

module.exports = User;
