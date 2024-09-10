// // const User = require("../models/user");
// const { DataTypes } = require("sequelize");
// const sequelize = require("../../models/index").sequelize;
// // const User = require("../../models/user")(sequelize, DataTypes);
// // const Location = require("../../models/location")(sequelize, DataTypes);
// const { User, Location } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const usersData = await User.findAll({
//       include: { model: Location, as: "location" },
//       attributes: { ...Features.fieldLimit(), exclude: "Pincode" },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return usersData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const { F_Name, L_Name, Email, Contact_No, Gender, Pincode } = data;
//     const usersData = { F_Name, L_Name, Email, Contact_No, Gender, Pincode };
//     const newUser = User.create(usersData);
//     return newUser;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getUserbyId = (id) => {
//   try {
//     const user = User.findOne({
//       where: { user_Id: id },
//       include: { model: Location, as: "location" },
//     });
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getRecordById = getUserbyId;

// exports.updateRecordData = async (body, id) => {
//   // getUserbyId()
//   // // getbyId()
//   // const usertemp = User.findOne({ where: { user_Id: id } });
//   // usertemp.Email = body.Email;
//   try {
//     const user = await User.update(
//       { ...body },
//       {
//         where: { user_Id: id },
//       }
//     );
//     if (user) {
//       const updatedUser = getUserbyId(id);

//       return updatedUser;
//     }
//     // return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.deleteRecordData = (id) => {
//   try {
//     const user = User.destroy({ where: { user_Id: id } });
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// ----------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const { User, Location } = require("../../models");

const reqObj = ["F_Name", "L_Name", "Email", "Contact_No", "Gender", "Pincode"];
const PRIMARY_KEY = "user_Id";
const IncludeArray = [{ model: Location, as: "location" }];
const user = new Basic(User, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = user;
