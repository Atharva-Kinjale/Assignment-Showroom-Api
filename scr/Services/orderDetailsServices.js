// const {
//   OrderDetails,
//   Customer,
//   Car,
//   Employee,
//   Location,
// } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const orderDetailsData = await OrderDetails.findAll({
//       include: [
//         { model: Customer, as: "cust" },
//         { model: Employee, as: "emp" },
//         { model: Car, as: "car" },
//         { model: Location, as: "loc" },
//       ],
//       attributes: { ...Features.fieldLimit() },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return orderDetailsData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const {
//       employee_Id,
//       customer_Id,
//       car_Id,
//       amount,
//       orderDate,
//       location,
//       createdBy,
//       updatedBy,
//     } = data;
//     const orderData = {
//       employee_Id,
//       customer_Id,
//       car_Id,
//       amount,
//       orderDate,
//       location,
//       createdBy,
//       updatedBy,
//     };
//     console.log(orderData);

//     const newOrder = OrderDetails.create(orderData);
//     return newOrder;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getOrderById = (id) => {
//   try {
//     console.log(id);

//     const order = OrderDetails.findOne({
//       where: { order_Id: id },
//       include: [
//         { model: Customer, as: "cust" },
//         { model: Employee, as: "emp" },
//         { model: Car, as: "car" },
//         { model: Location, as: "loc" },
//       ],
//     });
//     return order;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getRecordById = getOrderById;

// exports.updateRecordData = async (body, id) => {
//   // getUserbyId()
//   // // getbyId()
//   // const usertemp = User.findOne({ where: { user_Id: id } });
//   // usertemp.Email = body.Email;
//   // console.log("body", { ...body });
//   try {
//     const order = await OrderDetails.update(
//       { ...body },
//       {
//         where: { order_Id: id },
//       }
//     );
//     if (order) {
//       const updatedOrderData = getOrderById(id);

//       return updatedOrderData;
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

//     const order = OrderDetails.destroy({ where: { order_Id: id } });
//     return order;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// ----------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const {
  OrderDetails,
  Customer,
  Car,
  Employee,
  Location,
} = require("../../models");

const reqObj = [
  "employee_Id",
  "customer_Id",
  "car_Id",
  "amount",
  "orderDate",
  "location",
  "createdBy",
  "updatedBy",
];
const PRIMARY_KEY = "order_Id";
const IncludeArray = [
  { model: Customer, as: "cust" },
  { model: Employee, as: "emp" },
  { model: Car, as: "car" },
  { model: Location, as: "loc" },
];
const orderDetails = new Basic(Car, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = orderDetails;
