const express = require("express");

const router = express.Router();
const locationController = require("../controller/locattionController");
router
  .route("/")
  .get(locationController.getAllLocations)

  //Amitesh Comment:   createlocation  it should be createlLocation same for deletedlocation
  .post(locationController.createlocation);

router
  .route("/:id")
  .get(locationController.getlocationbyId)
  .patch(locationController.updateLocation)
  .delete(locationController.deletedlocation);

module.exports = router;
