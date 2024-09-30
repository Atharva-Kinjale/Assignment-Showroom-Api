const Basic = require("./BasicServices");
const { User, Location } = require("../../models");

const reqObj = ["F_Name", "L_Name", "Email", "Contact_No", "Gender", "Pincode"];
const PRIMARY_KEY = "user_Id";
const IncludeArray = [{ model: Location, as: "location" }];
const user = new Basic(User, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = user;
