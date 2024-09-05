const express = require("express");
const CSMapController = require("../controller/carServiceMapController");

const router = express.Router();

router
  .route("/")
  .get(CSMapController.getAllCarServiceMap)
  .post(CSMapController.createMapping);

router
  .route("/:id")
  .get(CSMapController.getMappingById)
  .patch(CSMapController.updateMapping)
  .delete(CSMapController.deleteMapping);
module.exports = router;
