const AppError = require("../../utils/appError");
const OrderServices = require("../Services/orderDetailsServices");
// find all users
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderServices.getAll(req.query);
    res.status(200).json({
      status: "success",
      length: orders.length,
      data: { orders: orders },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
  }
};
// Create a
exports.createOrder = async (req, res, next) => {
  try {
    console.log(req.body);
    const order = await OrderServices.createRecord(req.body);

    res.status(200).json({
      status: "success",
      length: order.length,
      data: { order: order },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get  by id
exports.getOrderById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const order = await OrderServices.getRecordById(id);
    if (!order) {
      return next(new AppError(`No Order with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: order.length,
      data: { orders: order },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update user
exports.updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await OrderServices.updateRecordData(
      req.body,
      req.params.id
    );
    if (!updatedOrder) {
      return next(new AppError(`No Order with ${req.params.id} id`, 404));
    }
    res.status(200).json({ status: "Success", data: { orders: updatedOrder } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete
exports.deleteOrder = async (req, res, next) => {
  try {
    let order = await OrderServices.deleteRecordData(req.params.id);
    if (!order) {
      return next(new AppError(`No Order with ${req.params.id} id`, 404));
    }
    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
