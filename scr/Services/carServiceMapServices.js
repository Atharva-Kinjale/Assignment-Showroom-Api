// const {
// Car,

// Service,
// Car_services,
// } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const data = await Car_services.findAll({
//       include: [
// { model: Car, as: "car" },
// { model: Service, as: "services" },
//       ],
//       attributes: { ...Features.fieldLimit() },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const { service_Id, car_Id } = data;
//     const input = {
//       service_Id,
//       car_Id,
//     };
//     console.log(input);

//     const newRecord = Car_services.create(input);
//     return newRecord;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getRecordById = (id) => {
//   try {
//     console.log(id);

//     const record = Car_services.findOne({
//       where: { car_services_Id: id },
//       include: [
//         { model: Car, as: "car" },
//         { model: Service, as: "services" },
//       ],
//     });
//     return record;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getbyId = getRecordById;

// exports.updateRecordData = async (body, id) => {
//   try {
//     const record = await Car_services.update(
//       { ...body },
//       {
//         where: { car_services_Id: id },
//       }
//     );
//     if (record) {
//       const updatedRecordData = getRecordById(id);

//       return updatedRecordData;
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

//     const record = Car_services.destroy({ where: { car_services_Id: id } });
//     return record;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const {
  Car,

  Service,
  Car_services,
} = require("../../models");

const reqObj = ["service_Id", "car_Id"];
const PRIMARY_KEY = "car_services_Id";
const IncludeArray = [
  { model: Car, as: "car" },
  { model: Service, as: "services" },
];
const carServicemap = new Basic(
  Car_services,
  reqObj,
  PRIMARY_KEY,
  IncludeArray
);
module.exports = carServicemap;
