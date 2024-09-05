// const { DataTypes, where } = require("sequelize");
// const errCodes = require("./errorMessages");
// const sequelize = require("../../models/index").sequelize;
const { Op } = require("sequelize");
// const Location = require("../../models/location")(sequelize, DataTypes);
const { User, Location } = require("../../models");
//
const APIFeatures = require("../../utils/ApiFeatures");
const AppError = require("../../utils/appError");
// ----------------------------------------------

exports.getAll = async (queryparams) => {
  try {
    const Features = new APIFeatures(queryparams);

    const a = Features.pagination();
    console.log("-------", a);

    // const locData = Location.findAll();
    const locData = await Location.findAll({
      attributes: Features.fieldLimit(),
      where: Features.filtering(),
      order: Features.Sorting(),
      limit: Features.pagination().limit,
      offset: Features.pagination().skip,

      // where: str,//not working
      // where: { pincode: { [Op.gte]: "100002" } },
      // order: [["createdAt", "DESC"]],
    });
    return locData;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

exports.createLoc = async (data) => {
  try {
    const { pincode, city, State, Country } = data;
    const locD = { pincode, city, State, Country };
    const newLoc = await Location.create(locD);
    return newLoc;
  } catch (err) {
    // console.log("12122", Object.keys(err.errors));
    // console.log(err.errors[0].type, err.errors[0].message);

    throw new Error(err.message);
  }
};

const getlocbyId = async (id) => {
  try {
    const loc = await Location.findOne({ where: { pincode: id } });
    return loc;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

exports.getbyId = getlocbyId;

exports.updateLocData = async (body, id) => {
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
    throw new Error(err.message);
  }
};

exports.deleteLocData = async (id) => {
  try {
    const loc = await Location.destroy({ where: { pincode: id } });
    return loc;
  } catch (err) {
    console.log("===================", err);
    // return new AppError(err, 404);
    throw new Error(err.message);
  }
};
