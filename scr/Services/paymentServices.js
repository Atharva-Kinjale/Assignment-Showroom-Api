const {
  OrderDetails,
  Customer,
  Car,
  Employee,
  Location,
  Payment,
} = require("../../models");
const APIFeatures = require("../../utils/ApiFeatures");

exports.getAll = async (queryparams) => {
  const Features = new APIFeatures(queryparams);
  try {
    const data = await Payment.findAll({
      include: [{ model: OrderDetails, as: "orderDetails" }],
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
    const { order_Id, paymentType, paymentStatus, createdBy, updatedBy } = data;
    const input = {
      order_Id,
      paymentType,
      paymentStatus,
      createdBy,
      updatedBy,
    };
    console.log(input);

    const newRecord = Payment.create(input);
    return newRecord;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

const getRecordById = (id) => {
  try {
    console.log(id);

    const record = Payment.findOne({
      where: { payment_Id: id },
      include: [{ model: OrderDetails, as: "orderDetails" }],
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
    const record = await Payment.update(
      { ...body },
      {
        where: { payment_Id: id },
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

    const record = Payment.destroy({ where: { payment_Id: id } });
    return record;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
