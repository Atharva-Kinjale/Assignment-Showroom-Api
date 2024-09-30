const Basic = require("./BasicServices");
const { OrderDetails, Payment } = require("../../models");

const reqObj = [
  "order_Id",
  "paymentType",
  "paymentStatus",
  "createdBy",
  "updatedBy",
];
const PRIMARY_KEY = "payment_Id";
const IncludeArray = [{ model: OrderDetails, as: "orderDetails" }];
const payment = new Basic(Payment, reqObj, PRIMARY_KEY, IncludeArray);
module.exports = payment;
