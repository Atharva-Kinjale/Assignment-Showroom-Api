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
