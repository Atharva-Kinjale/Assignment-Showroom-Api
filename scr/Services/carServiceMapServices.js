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
