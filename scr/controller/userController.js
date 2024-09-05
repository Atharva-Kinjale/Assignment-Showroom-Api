// const User = require("../models/user");
const AppError = require("../../utils/appError");
const UserServices = require("../Services/userServices");
// find all users
exports.getAllUsers = async (req, res, next) => {
  try {
    // const users = await User.findAll();
    const users = await UserServices.getAll(req.query);
    // Amitesh : create a re usable response and request function which will send all the status and message and data in response.
    res.status(200).json({ status: "success", data: { users: users } });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// Create a user
exports.createUser = async (req, res, next) => {
  try {
    // let details = {
    //   F_Name: req.body.fName,
    //   L_Name: req.body.L_Name,
    //   Gender: req.body.gender,
    // };
    // const user = await User.create(req.body);
    const user = await UserServices.createUser(req.body);
    console.log(user);

    res.status(200).send(user);
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const user = await User.findOne({ where: { user_Id: id } });
    const user = await UserServices.getbyId(id);
    // console.log(user.dataValues);
    if (!user) {
      return next(new AppError(`No user with ${id} id`), 404);
    }

    res.status(200).json({ status: "success", data: { users: user } });
  } catch (err) {
    // console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update user
exports.updateUser = async (req, res, next) => {
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedUser = await UserServices.updateUserData(
      req.body,
      req.params.id
    );
    if (!updatedUser) {
      return next(new AppError(`No user with ${req.params.id} id`), 404);
    }
    // console.log(updatedUser);
    res.status(200).json({ status: "Success", data: { users: updatedUser } });
  } catch (err) {
    // console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete user
exports.deletedUser = async (req, res, next) => {
  try {
    const user = await UserServices.deleteUserData(req.params.id);
    // console.log(updatedUser);
    if (!user) {
      return next(new AppError(`No user with ${req.params.id} id`), 404);
    }
    res.status(200).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    // console.log(err);
    next(new AppError(err.message, 500));
  }
};
