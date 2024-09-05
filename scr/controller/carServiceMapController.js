const AppError = require("../../utils/appError");
const carServiceMapServices = require("../Services/carServiceMapServices");
// find all users
exports.getAllCarServiceMap = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const records = await carServiceMapServices.getAll(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
    res.status(200).json({
      status: "success",
      length: records.length,
      data: { carServiceMaps: records },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a user
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
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getMappingById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const record = await carServiceMapServices.getbyId(id);
    // console.log(user.dataValues);
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
// update user
exports.updateMapping = async (req, res, next) => {
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

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

// delete user
exports.deleteMapping = async (req, res, next) => {
  try {
    let map = await carServiceMapServices.deleteRecordData(req.params.id);
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
