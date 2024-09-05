const AppError = require("../../utils/appError");
const OrderServices = require("../Services/orderDetailsServices");
// find all users
exports.getAllOrders = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const orders = await OrderServices.getAllOrders(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
    res.status(200).json({
      status: "success",
      length: orders.length,
      data: { orders: orders },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a user
exports.createOrder = async (req, res, next) => {
  try {
    console.log(req.body);
    // let details = {
    //   F_Name: req.body.fName,
    //   L_Name: req.body.L_Name,
    //   Gender: req.body.gender,
    // };
    // const user = await User.create(req.body);
    const order = await OrderServices.createOrder(req.body);

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
// get user by id
exports.getOrderById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const order = await OrderServices.getbyId(id);
    // console.log(user.dataValues);
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
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedOrder = await OrderServices.updateOrderData(
      req.body,
      req.params.id
    );
    if (!updatedOrder) {
      return next(new AppError(`No Order with ${req.params.id} id`, 404));
    }
    // console.log("req.params in updateC", req.body);
    res.status(200).json({ status: "Success", data: { orders: updatedOrder } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete user
exports.deleteOrder = async (req, res, next) => {
  try {
    let order = await OrderServices.deleteOrderData(req.params.id);
    if (!order) {
      return next(new AppError(`No Order with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
