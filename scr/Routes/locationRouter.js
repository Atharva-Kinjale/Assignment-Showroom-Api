const express = require("express");

const router = express.Router();
const locationController = require("../controller/locattionController");
router
  .route("/")
  .get(locationController.getAllLocations)
  .post(locationController.createlocation);

router
  .route("/:id")
  .get(locationController.getlocationbyId)
  .patch(locationController.updateLocation)
  .delete(locationController.deletedlocation);

module.exports = router;
