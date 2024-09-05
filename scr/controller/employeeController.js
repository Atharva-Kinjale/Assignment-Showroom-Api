const AppError = require("../../utils/appError");
const EmployeeServices = require("../Services/employeeServices");
// find all users
exports.getAllEmployee = async (req, res, next) => {
  try {
    const employees = await EmployeeServices.getAll(req.query);

    res.status(200).json({
      status: "success",
      length: employees.length,
      data: { employees: employees },
    });
  } catch (err) {
    next(new AppError(err.message, 404));
    // res.status(404).json({ staus: " Failure", message: err });
  }
};
// Create a user
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await EmployeeServices.createEmp(req.body);
    console.log(employee);

    res.status(200).json({
      status: "success",
      length: employee.length,
      data: { employees: employee },
    });
  } catch (err) {
    // res.status(404).json({ staus: " Failure", message: err.message });
    console.log(err);

    next(new AppError(err.message, 404));
  }
};
// get user by id
exports.getEmployeeById = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await User.findOne({ where: { user_Id: id } });
    const employee = await EmployeeServices.getbyId(id);
    // console.log(user.dataValues);
    if (!employee) {
      return next(new AppError(`No employee with ${id} id`), 404);
    }

    res.status(200).json({
      status: "success",
      length: employee.length,
      data: { employees: employee },
    });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};
// update user
exports.updateEmployee = async (req, res, next) => {
  // new User(...req.body);
  console.log(req.params);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedEmp = await EmployeeServices.updateEmployeeData(
      req.body,
      req.params.id
    );

    if (!updatedEmp) {
      return next(new AppError(`No Employee with ${req.params.id} id`, 404));
    }
    res
      .status(200)
      .json({ status: "Success", data: { employees: updatedEmp } });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 404));
  }
};

// delete user
exports.deleteEmployee = async (req, res, next) => {
  console.log(req.params.id);

  try {
    let employee = await EmployeeServices.deleteEmployeeData(req.params.id);
    if (!employee) {
      return next(new AppError(`No employee with ${req.params.id} id`, 404));
    }
    // console.log(updatedUser);
    res.status(204).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
