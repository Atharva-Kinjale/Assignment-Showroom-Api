// const models = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (
//   queryparams,
//   modelName,
//   includedModelname = null,
//   includedAs = null
// ) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     let m = `${modelName}`;
//     console.log(m);

//     const Data = await models.m.findAll({
//       //   include: { model: includedModelname, as: `${includedAs}` },
//       attributes: { ...Features.fieldLimit(), exclude: "Pincode" },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return Data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.createUser = (data) => {
//   try {
//     const { F_Name, L_Name, Email, Contact_No, Gender, Pincode } = data;
//     const usersData = { F_Name, L_Name, Email, Contact_No, Gender, Pincode };
//     const newUser = User.create(usersData);
//     return newUser;
//   } catch (err) {
//     console.log(err);
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
//   }
// };

// exports.getbyId = getUserbyId;

// exports.updateUserData = async (body, id) => {
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
//   }
// };

// exports.deleteUserData = (id) => {
//   try {
//     const user = User.destroy({ where: { user_Id: id } });
//     if (user) {
//       const updatedUser = getUserbyId(id);
//       console.log(updatedUser);

//       return updatedUser;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
