const express = require("express");
const employeeController = require("../controller/employeeController");

const router = express.Router();

router
  .route("/")
  .get(employeeController.getAllEmployee)
  .post(employeeController.createEmployee);

router
  .route("/:id")
  .get(employeeController.getEmployeeById)
  .patch(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);
module.exports = router;
