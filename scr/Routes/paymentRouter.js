const express = require("express");
const PaymentController = require("../controller/paymentController");

const router = express.Router();

router
  .route("/")
  .get(PaymentController.getAllPaymnets)
  .post(PaymentController.createPayment);

router
  .route("/:id")
  .get(PaymentController.getPaymentById)
  .patch(PaymentController.updatepayment)
  .delete(PaymentController.deletePayment);
module.exports = router;
