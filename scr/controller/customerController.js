const AppError = require("../../utils/appError");
const CustomerServices = require("../Services/customerServices");
// find all users
exports.getAllCustomers = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const customers = await CustomerServices.getAll(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
    res.status(200).json({
      status: "success",
      length: customers.length,
      data: { customers: customers },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a user
exports.createCustomer = async (req, res, next) => {
  try {
    // let details = {
    //   F_Name: req.body.fName,
    //   L_Name: req.body.L_Name,
    //   Gender: req.body.gender,
    // };
    // const user = await User.create(req.body);
    const customer = await CustomerServices.createRecord(req.body);
    console.log(customer);

    res.status(200).json({
      status: "success",
      length: customer.length,
      data: { customers: customer },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const customer = await CustomerServices.getRecordById(id);
    // console.log(user.dataValues);
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
// update user
exports.updateCustomer = async (req, res, next) => {
  // new User(...req.body);
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

// delete user
exports.deletedCustomer = async (req, res, next) => {
  try {
    let customer = await CustomerServices.deleteRecordData(req.params.id);
    if (!customer) {
      return next(new AppError(`No Customer with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
