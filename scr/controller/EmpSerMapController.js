const AppError = require("../../utils/appError");
const EmpServiceMapServices = require("../Services/EmpServicesMapServices");
// find all users
exports.getAllEmpSerMap = async (req, res, next) => {
  try {
    const records = await EmpServiceMapServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: records.length,
      data: { EmpServicesMap: records },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create a user
exports.createMapping = async (req, res, next) => {
  try {
    console.log(req.body);

    const createdMap = await EmpServiceMapServices.createRecord(req.body);

    res.status(200).json({
      status: "success",
      length: createdMap.length,
      data: { EmpServicesMaps: createdMap },
    });
  } catch (err) {
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getMappingById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const record = await EmpServiceMapServices.getRecordById(id);
    // console.log(user.dataValues);
    if (!record) {
      return next(new AppError(`No record with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: record.length,
      data: { EmpServicesMaps: record },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update user
exports.updateMapping = async (req, res, next) => {
  try {
    const updatedMap = await EmpServiceMapServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedMap) {
      return next(new AppError(`No record with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res
      .status(200)
      .json({ status: "Success", data: { EmpServicesMap: updatedMap } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete user
exports.deleteMapping = async (req, res, next) => {
  try {
    let map = await EmpServiceMapServices.deleteRecordData(req.params.id);
    if (!map) {
      return next(new AppError(`No record with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
