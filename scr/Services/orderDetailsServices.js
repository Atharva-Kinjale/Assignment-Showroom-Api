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

const orderDetails = new Basic(OrderDetails, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = orderDetails;
