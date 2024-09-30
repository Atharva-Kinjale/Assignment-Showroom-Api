const AppError = require("../../utils/appError");
const locationServices = require("../Services/locationServices");
const STATUSCODES = require("../Services/StatusCodes");
// find all locations
exports.getAllLocations = async (req, res, next) => {
  try {
    const locations = await locationServices.getAll(req.query);
    res.status(STATUSCODES.OK).json({
      status: "success",
      length: locations.length,
      data: { locations: locations },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};

// Create a location
exports.createLocation = async (req, res, next) => {
  try {
    const location = await locationServices.createRecord(req.body);
    console.log(location);

    res.status(STATUSCODES.CREATED).json({
      status: "success",
      // length: location.length,
      data: { locations: location },
    });
  } catch (err) {
    //
    next(new AppError(err.message, 404));
  }
  // next();
};

// get location by id
exports.getLocationById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const loc = await locationServices.getRecordById(id);
    if (!loc) {
      return next(new AppError(`No location with ${id} id`), 404);
    }

    res.status(STATUSCODES.OK).json({
      status: "success",
      length: loc.length,
      data: { locations: loc },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
    // res
    //   .status(STATUSCODES.NOT_FOUND)
    //   .json({ status: " Failure", message: err });
  }
};
// update locations
exports.updateLocation = async (req, res, next) => {
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedloc = await locationServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedloc) {
      return next(new AppError(`No location with ${req.params.id} id`, 404));
    }
    console.log(updatedloc);
    res.status(STATUSCODES.OK).json({
      status: "Success",
      length: updatedloc.length,
      data: { locations: updatedloc },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};

// delete location
exports.deletedLocation = async (req, res, next) => {
  try {
    const loc = await locationServices.deleteRecordData(req.params.id);
    if (!loc) {
      return next(new AppError(`No location with ${req.params.id} id`, 404));
    }
    res.status(STATUSCODES.NO_CONTENT).json({ status: "Success", data: null });
  } catch (err) {
    next(new AppError(err.message, 500));
    // res
    //   .status(STATUSCODES.INTERNAL_SERVER_ERROR)
    //   .json({ status: " Failure", message: err.message });
  }
};

// ----------------------------------------------
