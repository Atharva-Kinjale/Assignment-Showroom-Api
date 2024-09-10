const AppError = require("../../utils/appError");
const CarServices = require("../Services/carServices");
// find all users
exports.getAllCars = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const cars = await CarServices.getAll(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
    res.status(200).json({
      status: "success",
      length: cars.length,
      data: { cars: cars },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a user
exports.createCar = async (req, res, next) => {
  try {
    // let details = {
    //   F_Name: req.body.fName,
    //   L_Name: req.body.L_Name,
    //   Gender: req.body.gender,
    // };
    // const user = await User.create(req.body);
    const car = await CarServices.createRecord(req.body);
    console.log(car);

    res.status(200).json({
      status: "success",
      length: car.length,
      data: { car: car },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getCarById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const car = await CarServices.getRecordById(id);
    // console.log(user.dataValues);
    if (!car) {
      return next(new AppError(`No Car with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: car.length,
      data: { cars: car },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update user
exports.updateCar = async (req, res, next) => {
  try {
    const updatedCar = await CarServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedCar) {
      return next(new AppError(`No Car with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res.status(200).json({ status: "Success", data: { cars: updatedCar } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete user
exports.deletedCar = async (req, res, next) => {
  try {
    let car = await CarServices.deleteRecordData(req.params.id);
    if (!car) {
      return next(new AppError(`No Car with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
