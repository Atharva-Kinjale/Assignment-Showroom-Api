const AppError = require("../../utils/appError");
const carServiceMapServices = require("../Services/carServiceMapServices");
// find all
exports.getAllCarServiceMap = async (req, res, next) => {
  try {
    const records = await carServiceMapServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: records.length,
      data: { carServiceMaps: records },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create a
exports.createMapping = async (req, res, next) => {
  try {
    console.log(req.body);

    const carServiceMaps = await carServiceMapServices.createRecord(req.body);

    res.status(200).json({
      status: "success",
      length: carServiceMaps.length,
      data: { carServiceMaps: carServiceMaps },
    });
  } catch (err) {
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get  by id
exports.getMappingById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const record = await carServiceMapServices.getRecordById(id);
    if (!record) {
      return next(new AppError(`No record with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: record.length,
      data: { carServiceMaps: record },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update
exports.updateMapping = async (req, res, next) => {
  try {
    const updatedMap = await carServiceMapServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedMap) {
      return next(new AppError(`No record with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res
      .status(200)
      .json({ status: "Success", data: { carServiceMaps: updatedMap } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete
exports.deleteMapping = async (req, res, next) => {
  try {
    let map = await carServiceMapServices.deleteRecordData(req.params.id);
    if (!map) {
      return next(new AppError(`No record with ${req.params.id} id`, 404));
    }

    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
