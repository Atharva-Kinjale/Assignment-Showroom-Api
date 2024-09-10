// const { User, Location } = require("../../models");
// //
// const APIFeatures = require("../../utils/ApiFeatures");

// // ----------------------------------------------

// exports.getAll = async (queryparams) => {
//   try {
//     const Features = new APIFeatures(queryparams);

//     const a = Features.pagination();
//     console.log("-------", a);

//     // const locData = Location.findAll();
//     const locData = await Location.findAll({
//       attributes: Features.fieldLimit(),
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,

//       // where: str,//not working
//       // where: { pincode: { [Op.gte]: "100002" } },
//       // order: [["createdAt", "DESC"]],
//     });
//     return locData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = async (data) => {
//   try {
//     const { pincode, city, State, Country } = data;
//     const locD = { pincode, city, State, Country };
//     const newLoc = await Location.create(locD);
//     return newLoc;
//   } catch (err) {
//     // console.log("12122", Object.keys(err.errors));
//     // console.log(err.errors[0].type, err.errors[0].message);

//     throw new Error(err.message);
//   }
// };

// const getlocbyId = async (id) => {
//   try {
//     const loc = await Location.findOne({ where: { pincode: id } });
//     return loc;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err);
//   }
// };

// exports.getRecordById = getlocbyId;

// exports.updateRecordData = async (body, id) => {
//   try {
//     const loc = await Location.update(
//       { ...body },
//       {
//         where: { pincode: id },
//       }
//     );
//     if (loc) {
//       const updatedloc = getlocbyId(id);

//       return updatedloc;
//     }
//     // return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.deleteRecordData = async (id) => {
//   try {
//     const loc = await Location.destroy({ where: { pincode: id } });
//     return loc;
//   } catch (err) {
//     console.log("===================", err);
//     // return new AppError(err, 404);
//     throw new Error(err.message);
//   }
// };

// // -------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const { User, Location } = require("../../models");

const reqObj = ["pincode", "city", "State", "Country"];
const location = new Basic(Location, reqObj, "pincode", null);

module.exports = location;
