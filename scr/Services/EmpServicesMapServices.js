const Basic = require("./BasicServices");
const {
  Employee,

  Service,
  Employee_services,
} = require("../../models");

const reqObj = ["service_Id", "employee_Id"];
const PRIMARY_KEY = "employee_services_Id";
const IncludeArray = [
  { model: Employee, as: "employees" },
  { model: Service, as: "services" },
];
const empSErviceMap = new Basic(
  Employee_services,
  reqObj,
  PRIMARY_KEY,
  IncludeArray
);
module.exports = empSErviceMap;
