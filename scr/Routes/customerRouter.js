const express = require("express");
const customerController = require("../controller/customerController");

const router = express.Router();

router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router
  .route("/:id")
  .get(customerController.getCustomerById)
  .patch(customerController.updateCustomer)
  .delete(customerController.deletedCustomer);
module.exports = router;
