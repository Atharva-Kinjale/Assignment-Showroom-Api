const express = require("express");

const router = express.Router();
const locationController = require("../controller/locattionController");
router
  .route("/")
  .get(locationController.getAllLocations)

  .post(locationController.createLocation);

router
  .route("/:id")
  .get(locationController.getLocationById)
  .patch(locationController.updateLocation)
  .delete(locationController.deletedLocation);

module.exports = router;
