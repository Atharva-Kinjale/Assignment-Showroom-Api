const { DataTypes } = require("sequelize");
const errCodes = require("./errorMessages");
const sequelize = require("../../models/index").sequelize;
// const Location = require("../../models/location")(sequelize, DataTypes);
const { User, Location } = require("../../models");
exports.getAll = () => {
  try {
    const locData = Location.findAll();
    return locData;
  } catch (err) {
    console.log(err);
  }
};

exports.createLoc = (data) => {
  try {
    const { pincode, city, State, Country } = data;
    const locD = { pincode, city, State, Country };
    const newLoc = Location.create(locD);
    return newLoc;
  } catch (err) {
    console.log(err);
  }
};

const getlocbyId = (id) => {
  try {
    const loc = Location.findOne({ where: { pincode: id } });
    return loc;
  } catch (err) {
    console.log(err);
  }
};

exports.getbyId = getlocbyId;

exports.updateLocData = async (body, id) => {
  // getUserbyId()
  // // getbyId()
  // const usertemp = User.findOne({ where: { user_Id: id } });
  // usertemp.Email = body.Email;
  try {
    const loc = await Location.update(
      { ...body },
      {
        where: { pincode: id },
      }
    );
    if (loc) {
      const updatedloc = getlocbyId(id);

      return updatedloc;
    }
    // return user;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteLocData = (id) => {
  try {
    const loc = Location.destroy({ where: { pincode: id } });
    if (loc) {
      const updatedloc = getlocbyId(id);
      console.log(updatedloc);

      return updatedloc;
    }
  } catch (err) {
    console.log(err);
  }
};
