const AppError = require("../../utils/appError");
const ServiceDetailsServices = require("../Services/serviceDetailsServices");
// find all
exports.getAllServices = async (req, res, next) => {
  try {
    const services = await ServiceDetailsServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: services.length,
      data: { services: services },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a
exports.createService = async (req, res, next) => {
  try {
    console.log(req.body);
    const service = await ServiceDetailsServices.createRecord(req.body);

    res.status(200).json({
      status: "success",
      length: service.length,
      data: { services: service },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get  by id
exports.getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const service = await ServiceDetailsServices.getRecordById(id);
    if (!service) {
      return next(new AppError(`No Service with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: service.length,
      data: { services: service },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update
exports.updateService = async (req, res, next) => {
  try {
    const updatedService = await ServiceDetailsServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedService) {
      return next(new AppError(`No Service with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res
      .status(200)
      .json({ status: "Success", data: { services: updatedService } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete
exports.deleteService = async (req, res, next) => {
  try {
    let service = await ServiceDetailsServices.deleteRecordData(req.params.id);
    if (!service) {
      return next(new AppError(`No service with ${req.params.id} id`, 404));
    }
    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
