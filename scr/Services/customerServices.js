const Basic = require("./BasicServices");
const { User, Customer } = require("../../models");

const reqObj = ["user_Id"];
const PRIMARY_KEY = "customer_Id";
const IncludeArray = [{ model: User, as: "user" }];
const customer = new Basic(Customer, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = customer;
