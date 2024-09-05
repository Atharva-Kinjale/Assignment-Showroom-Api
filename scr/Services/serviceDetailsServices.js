const { Location, Service } = require("../../models");
const APIFeatures = require("../../utils/ApiFeatures");

exports.getAllServices = async (queryparams) => {
  const Features = new APIFeatures(queryparams);
  try {
    const servicesData = await Service.findAll({
      include: [{ model: Location, as: "loc" }],
      attributes: { ...Features.fieldLimit() },
      where: Features.filtering(),
      order: Features.Sorting(),
      limit: Features.pagination().limit,
      offset: Features.pagination().skip,
    });
    return servicesData;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

exports.createService = (data) => {
  try {
    const {
      serviceName,
      timeRequired,
      description,
      cost,
      location,
      createdBy,
      updatedBy,
    } = data;
    const serviceData = {
      serviceName,
      timeRequired,
      description,
      cost,
      location,
      createdBy,
      updatedBy,
    };
    console.log(serviceData);

    const newService = Service.create(serviceData);
    return newService;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

const getServiceById = (id) => {
  try {
    console.log(id);

    const service = Service.findOne({
      where: { service_Id: id },
      include: [{ model: Location, as: "loc" }],
    });
    return service;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

exports.getbyId = getServiceById;

exports.updateServiceData = async (body, id) => {
  try {
    const service = await Service.update(
      { ...body },
      {
        where: { service_Id: id },
      }
    );
    if (service) {
      const updatedServiceData = getServiceById(id);

      return updatedServiceData;
    }
    // return customer;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};

exports.deleteServiceData = (id) => {
  try {
    console.log("deleteId", id);

    const service = Service.destroy({ where: { service_Id: id } });
    return service;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
