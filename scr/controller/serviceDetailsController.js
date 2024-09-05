const AppError = require("../../utils/appError");
const ServiceDetailsServices = require("../Services/serviceDetailsServices");
// find all users
exports.getAllServices = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const services = await ServiceDetailsServices.getAllServices(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
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
// Create a user
exports.createService = async (req, res, next) => {
  try {
    console.log(req.body);
    // let details = {
    //   F_Name: req.body.fName,
    //   L_Name: req.body.L_Name,
    //   Gender: req.body.gender,
    // };
    // const user = await User.create(req.body);
    const service = await ServiceDetailsServices.createService(req.body);

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
// get user by id
exports.getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const service = await ServiceDetailsServices.getbyId(id);
    // console.log(user.dataValues);
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
// update user
exports.updateService = async (req, res, next) => {
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedService = await ServiceDetailsServices.updateServiceData(
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

// delete user
exports.deleteService = async (req, res, next) => {
  try {
    let service = await ServiceDetailsServices.deleteServiceData(req.params.id);
    if (!service) {
      return next(new AppError(`No service with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
