const Basic = require("./BasicServices");
const { Location, Service } = require("../../models");

const reqObj = [
  "serviceName",
  "timeRequired",
  "description",
  "cost",
  "location",
  "createdBy",
  "updatedBy",
];
const PRIMARY_KEY = "service_Id";
const IncludeArray = [{ model: Location, as: "loc" }];
const serviceDetails = new Basic(Service, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = serviceDetails;
