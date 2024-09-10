// const { User, Location, Customer } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const customersData = await Customer.findAll({
//       include: { model: User, as: "user" },
//       attributes: { ...Features.fieldLimit() },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return customersData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const { user_Id } = data;
//     const cusomersData = { user_Id };
//     const newCustomer = Customer.create(cusomersData);
//     return newCustomer;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getcustomerbyId = (id) => {
//   try {
//     console.log(id);

//     const customer = Customer.findOne({
//       where: { customer_Id: id },
//       include: { model: User, as: "user" },
//     });
//     return customer;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getRecordById = getcustomerbyId;

// exports.updateRecordData = async (body, id) => {
//   // getUserbyId()
//   // // getbyId()
//   // const usertemp = User.findOne({ where: { user_Id: id } });
//   // usertemp.Email = body.Email;
//   // console.log("body", { ...body });
//   try {
//     const customer = await Customer.update(
//       { ...body },
//       {
//         where: { customer_Id: id },
//       }
//     );
//     if (customer) {
//       const updatedCustomer = getcustomerbyId(id);

//       return updatedCustomer;
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

//     const customer = Customer.destroy({ where: { customer_Id: id } });
//     return customer;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// ----------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const { User, Customer } = require("../../models");

const reqObj = ["user_Id"];
const PRIMARY_KEY = "customer_Id";
const IncludeArray = [{ model: User, as: "user" }];
const customer = new Basic(Customer, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = customer;
