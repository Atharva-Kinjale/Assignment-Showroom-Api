const express = require("express");
const carcontroller = require("../controller/carController");

const router = express.Router();

router.route("/").get(carcontroller.getAllCars).post(carcontroller.createCar);

router
  .route("/:id")
  .get(carcontroller.getCarById)
  .patch(carcontroller.updateCar)
  .delete(carcontroller.deletedCar);
module.exports = router;
