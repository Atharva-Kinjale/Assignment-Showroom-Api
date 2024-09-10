// const { Car, Location } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const carsData = await Car.findAll({
//       include: { model: Location, as: "loc" },
//       attributes: { ...Features.fieldLimit() },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return carsData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const {
//       model,
//       price,
//       manufactureYear,
//       mileage,
//       location,
//       isAvailable,
//       createdBy,
//       updatedBy,
//     } = data;
//     const carsData = {
//       model,
//       price,
//       manufactureYear,
//       mileage,
//       location,
//       isAvailable,
//       createdBy,
//       updatedBy,
//     };
//     const newCar = Car.create(carsData);
//     return newCar;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getCarsDataById = (id) => {
//   try {
//     // console.log(id);

//     const car = Car.findOne({
//       where: { car_Id: id },
//       include: { model: Location, as: "loc" },
//     });
//     return car;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getRecordById = getCarsDataById;

// exports.updateRecordData = async (body, id) => {
//   // getUserbyId()
//   // // getbyId()
//   // const usertemp = User.findOne({ where: { user_Id: id } });
//   // usertemp.Email = body.Email;
//   // console.log("body", { ...body });
//   try {
//     const car = await Car.update(
//       { ...body },
//       {
//         where: { car_Id: id },
//       }
//     );
//     if (car) {
//       const updatedCar = getCarsDataById(id);

//       return updatedCar;
//     }
//     // return customer;
//   } catch (err) {
//     console.log(err.message);
//     throw new Error(err.message);
//   }
// };

// exports.deleteRecordData = (id) => {
//   try {
//     console.log("deleteId", id);

//     const car = Car.destroy({ where: { car_Id: id } });
//     return car;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };
// ----------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const { Car, Location } = require("../../models");

const reqObj = [
  "model",
  "price",
  "manufactureYear",
  "mileage",
  "location",
  "isAvailable",
  "createdBy",
  "updatedBy",
];
const PRIMARY_KEY = "car_Id";
const IncludeArray = [{ model: Location, as: "loc" }];
const car = new Basic(Car, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = car;
