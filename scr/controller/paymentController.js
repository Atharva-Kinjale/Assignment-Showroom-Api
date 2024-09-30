const AppError = require("../../utils/appError");
const PaymentServices = require("../Services/paymentServices");
// find all
exports.getAllPaymnets = async (req, res, next) => {
  try {
    const payments = await PaymentServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: payments.length,
      data: { payments: payments },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create a
exports.createPayment = async (req, res, next) => {
  try {
    console.log(req.body);

    const payment = await PaymentServices.createRecord(req.body);

    res.status(200).json({
      status: "success",
      length: payment.length,
      data: { payments: payment },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get  by id
exports.getPaymentById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const payment = await PaymentServices.getRecordById(id);
    if (!payment) {
      return next(new AppError(`No payment with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: payment.length,
      data: { payments: payment },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update
exports.updatepayment = async (req, res, next) => {
  try {
    const updatedPayment = await PaymentServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedPayment) {
      return next(new AppError(`No payment with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res
      .status(200)
      .json({ status: "Success", data: { payments: updatedPayment } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete
exports.deletePayment = async (req, res, next) => {
  try {
    let payment = await PaymentServices.deleteRecordData(req.params.id);
    if (!payment) {
      return next(new AppError(`No payment with ${req.params.id} id`, 404));
    }
    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
