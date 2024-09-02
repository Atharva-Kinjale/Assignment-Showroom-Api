// const User = require("../models/user");
const { DataTypes } = require("sequelize");
const sequelize = require("../../models/index").sequelize;
// const User = require("../../models/user")(sequelize, DataTypes);
// const Location = require("../../models/location")(sequelize, DataTypes);
const { User, Location } = require("../../models");

exports.getAll = async () => {
  try {
    const usersData = await User.findAll({
      include: { model: Location, as: "location" },
    });
    return usersData;
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = (data) => {
  try {
    const { F_Name, L_Name, Email, Contact_No, Gender, Pincode } = data;
    const usersData = { F_Name, L_Name, Email, Contact_No, Gender, Pincode };
    const newUser = User.create(usersData);
    return newUser;
  } catch (err) {
    console.log(err);
  }
};

const getUserbyId = (id) => {
  try {
    const user = User.findOne({
      where: { user_Id: id },
      include: { model: Location, as: "location" },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

exports.getbyId = getUserbyId;

exports.updateUserData = async (body, id) => {
  // getUserbyId()
  // // getbyId()
  // const usertemp = User.findOne({ where: { user_Id: id } });
  // usertemp.Email = body.Email;
  try {
    const user = await User.update(
      { ...body },
      {
        where: { user_Id: id },
      }
    );
    if (user) {
      const updatedUser = getUserbyId(id);

      return updatedUser;
    }
    // return user;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUserData = (id) => {
  try {
    const user = User.destroy({ where: { user_Id: id } });
    if (user) {
      const updatedUser = getUserbyId(id);
      console.log(updatedUser);

      return updatedUser;
    }
  } catch (err) {
    console.log(err);
  }
};
