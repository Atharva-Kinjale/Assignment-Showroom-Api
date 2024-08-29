const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUserbyId)
  .patch(userController.updateUser)
  .delete(userController.deletedUser);
module.exports = router;
