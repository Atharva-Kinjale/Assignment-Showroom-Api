const express = require("express");
const serviceDetailsContoller = require("../controller/serviceDetailsController");

const router = express.Router();

router
  .route("/")
  .get(serviceDetailsContoller.getAllServices)
  .post(serviceDetailsContoller.createService);

router
  .route("/:id")
  .get(serviceDetailsContoller.getServiceById)
  .patch(serviceDetailsContoller.updateService)
  .delete(serviceDetailsContoller.deleteService);
module.exports = router;
