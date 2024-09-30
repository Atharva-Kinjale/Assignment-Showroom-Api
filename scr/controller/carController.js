const AppError = require("../../utils/appError");
const CarServices = require("../Services/carServices");
// find all users
exports.getAllCars = async (req, res, next) => {
  try {
    const cars = await CarServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: cars.length,
      data: { cars: cars },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create
exports.createCar = async (req, res, next) => {
  try {
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
// get  by id
exports.getCarById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const car = await CarServices.getRecordById(id);
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
// update
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

// delete
exports.deletedCar = async (req, res, next) => {
  try {
    let car = await CarServices.deleteRecordData(req.params.id);
    if (!car) {
      return next(new AppError(`No Car with ${req.params.id} id`, 404));
    }

    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
