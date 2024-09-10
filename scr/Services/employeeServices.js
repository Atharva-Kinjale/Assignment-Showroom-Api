// const { Sequelize } = require("sequelize");
// const { User, Employee } = require("../../models");
// const APIFeatures = require("../../utils/ApiFeatures");

// exports.getAll = async (queryparams) => {
//   const Features = new APIFeatures(queryparams);
//   try {
//     const employeeData = await Employee.findAll({
//       include: { model: User, as: "user" },
//       attributes: { ...Features.fieldLimit() },
//       where: Features.filtering(),
//       order: Features.Sorting(),
//       limit: Features.pagination().limit,
//       offset: Features.pagination().skip,
//     });
//     return employeeData;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.createRecord = (data) => {
//   try {
//     const { user_Id } = data;
//     const empData = { user_Id };
//     const newEmp = Employee.create(empData);
//     return newEmp;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// const getEmpById = (id) => {
//   try {
//     const employee = Employee.findOne({
//       // where: { employee_Id: id },
//       where: Sequelize.literal(`BINARY employee_Id='${id}'`),
//       include: { model: User, as: "user" },
//     });
//     return employee;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// exports.getRecordById = getEmpById;

// exports.updateRecordData = async (body, id) => {
//   // getUserbyId()
//   // // getbyId()
//   // const usertemp = User.findOne({ where: { user_Id: id } });
//   // usertemp.Email = body.Email;
//   console.log("body", { ...body });
//   try {
//     const employee = await Employee.update(
//       { ...body },
//       {
//         where: { employee_Id: id },
//       }
//     );

//     if (employee) {
//       const updatedEmp = getEmpById(id);

//       return updatedEmp;
//     }
//     // return user;
//   } catch (err) {
//     console.log(err.message);
//     throw new Error(err.message);
//   }
// };

// exports.deleteRecordData = (id) => {
//   try {
//     console.log("deleteId", id);

//     const employee = Employee.destroy({ where: { employee_Id: id } });
//     return employee;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err.message);
//   }
// };

// ----------------------------------------------------------------
// using single class for basci services like get all, create,delete,update etc

const Basic = require("./BasicServices");
const { User, Employee } = require("../../models");

const reqObj = ["user_Id"];
const PRIMARY_KEY = "employee_Id";
const IncludeArray = [{ model: User, as: "user" }];
const employee = new Basic(Employee, reqObj, PRIMARY_KEY, IncludeArray);

module.exports = employee;
