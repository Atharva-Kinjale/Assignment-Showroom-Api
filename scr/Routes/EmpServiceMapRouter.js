const express = require("express");
const ESMapController = require("../controller/EmpSerMapController");

const router = express.Router();

router
  .route("/")
  .get(ESMapController.getAllEmpSerMap)
  .post(ESMapController.createMapping);

router
  .route("/:id")
  .get(ESMapController.getMappingById)
  .patch(ESMapController.updateMapping)
  .delete(ESMapController.deleteMapping);
module.exports = router;
