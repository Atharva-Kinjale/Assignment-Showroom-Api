const {
  Employee,

  Service,
  Employee_services,
} = require("../../models");
const APIFeatures = require("../../utils/ApiFeatures");

exports.getAll = async (queryparams) => {
  const Features = new APIFeatures(queryparams);
  try {
    const data = await Employee_services.findAll({
      include: [
        { model: Employee, as: "employees" },
        { model: Service, as: "services" },
      ],
      attributes: { ...Features.fieldLimit() },
      where: Features.filtering(),
      order: Features.Sorting(),
      limit: Features.pagination().limit,
      offset: Features.pagination().skip,
    });
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

exports.createRecord = (data) => {
  try {
    const { service_Id, employee_Id } = data;
    const input = {
      service_Id,
      employee_Id,
    };
    console.log(input);

    const newRecord = Employee_services.create(input);
    return newRecord;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

const getRecordById = (id) => {
  try {
    console.log(id);

    const record = Employee_services.findOne({
      where: { employee_services_Id: id },
      include: [
        { model: Employee, as: "employees" },
        { model: Service, as: "services" },
      ],
    });
    return record;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

exports.getbyId = getRecordById;

exports.updateRecordData = async (body, id) => {
  try {
    const record = await Employee_services.update(
      { ...body },
      {
        where: { employee_services_Id: id },
      }
    );
    if (record) {
      const updatedRecordData = getRecordById(id);

      return updatedRecordData;
    }
    // return customer;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

exports.deleteRecordData = (id) => {
  try {
    console.log("deleteId", id);

    const record = Employee_services.destroy({
      where: { employee_services_Id: id },
    });
    return record;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
