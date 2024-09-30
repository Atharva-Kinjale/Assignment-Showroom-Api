const Basic = require("./BasicServices");
const { User, Location } = require("../../models");

const reqObj = ["pincode", "city", "State", "Country"];
const location = new Basic(Location, reqObj, "pincode", null);

module.exports = location;
