const Basic = require("./BasicServices");
const { User, Employee } = require("../../models");

const reqObj = ["user_Id"];
const PRIMARY_KEY = "employee_Id";
const IncludeArray = [{ model: User, as: "user" }];
const employee = new Basic(Employee, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = employee;
