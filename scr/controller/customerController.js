const AppError = require("../../utils/appError");
const CustomerServices = require("../Services/customerServices");
// find all
exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await CustomerServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: customers.length,
      data: { customers: customers },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create a
exports.createCustomer = async (req, res, next) => {
  try {
    const customer = await CustomerServices.createRecord(req.body);
    console.log(customer);

    res.status(200).json({
      status: "success",
      length: customer.length,
      data: { customers: customer },
    });
  } catch (err) {
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get  by id
exports.getCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const customer = await CustomerServices.getRecordById(id);

    if (!customer) {
      return next(new AppError(`No Customer with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: customer.length,
      data: { customers: customer },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update
exports.updateCustomer = async (req, res, next) => {
  try {
    const updatedCustomer = await CustomerServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedCustomer) {
      return next(new AppError(`No Customer with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res
      .status(200)
      .json({ status: "Success", data: { customers: updateCustomer } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete
exports.deletedCustomer = async (req, res, next) => {
  try {
    let customer = await CustomerServices.deleteRecordData(req.params.id);
    if (!customer) {
      return next(new AppError(`No Customer with ${req.params.id} id`, 404));
    }

    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
