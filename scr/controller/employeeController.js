const AppError = require("../../utils/appError");
const EmployeeServices = require("../Services/employeeServices");
// find all
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
  }
};
// Create a
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await EmployeeServices.createRecord(req.body);
    console.log(employee);

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
// get  by id
exports.getEmployeeById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const employee = await EmployeeServices.getRecordById(id);
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
// update
exports.updateEmployee = async (req, res, next) => {
  console.log(req.params);
  try {
    const updatedEmp = await EmployeeServices.updateRecordData(
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

// delete
exports.deleteEmployee = async (req, res, next) => {
  console.log(req.params.id);

  try {
    let employee = await EmployeeServices.deleteRecordData(req.params.id);
    if (!employee) {
      return next(new AppError(`No employee with ${req.params.id} id`, 404));
    }
    res.status(204).json({ statusss: "Success", data: null });
  } catch (err) {
    console.log(err);
    next(new AppError(err.message, 500));
  }
};
