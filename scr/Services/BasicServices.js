const { Sequelize } = require("sequelize");
const {
  User,
  Location,
  Car,
  Service,
  Employee_services,
  Employee,
  Customer,
  Payment,
  OrderDetails,
  Car_services,
} = require("../../models");
const APIFeatures = require("../../utils/ApiFeatures");
class Basic {
  constructor(model_Name, IncomimgObj, PRIMARY_KEY, IncludeArr) {
    this.model_Name = model_Name;
    this.IncomimgObj = IncomimgObj;
    this.PRIMARY_KEY = PRIMARY_KEY;
    this.IncludeArr = IncludeArr;
  }
  getAll = async (queryparams) => {
    const Features = new APIFeatures(queryparams);
    try {
      console.log(this.IncludeArr);

      const data = await this.model_Name.findAll({
        // include: [
        //   { model: Car, as: "car" },
        //   { model: Service, as: "services" },
        // ],
        // INCLUDE_ARRAY
        include: this.IncludeArr,
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
  createRecord = async (data) => {
    try {
      const entry = {};

      this.IncomimgObj.forEach((field) => {
        if (data[field]) {
          entry[field] = data[field];
        }
      });
      console.log(entry);
      //   const { ...INCOMMING_DATAOBJ } = data;
      //   const input = INCOMMING_DATAOBJ;
      //   console.log(input);

      const newRecord = await this.model_Name.create(entry);
      return newRecord;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
  getRecordById = async (id) => {
    try {
      //   console.log(this.PRIMARY_KEY);
      const pk = this.PRIMARY_KEY;
      console.log("Primary key", pk);
      //   console.log("Req obj :", this.IncomimgObj);

      const record = await this.model_Name.findOne({
        where: Sequelize.literal(`BINARY ${this.PRIMARY_KEY}='${id}'`),
        // include: [
        //   { model: Car, as: "car" },
        //   { model: Service, as: "services" },
        // ],
        // INCLUDE_ARRAY
        include: this.IncludeArr,
      });
      return record;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };

  updateRecordData = async (body, id) => {
    try {
      //   console.log("Primary key", this.PK);

      const record = await this.model_Name.update(
        { ...body },
        {
          where: { [this.PRIMARY_KEY]: id },
        }
      );
      if (record) {
        const updatedRecordData = this.getRecordById(id);

        return updatedRecordData;
      }
      // return customer;
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  };

  deleteRecordData = async (id) => {
    try {
      console.log("deleteId", id);

      const record = await this.model_Name.destroy({
        where: { [this.PRIMARY_KEY]: id },
      });
      return record;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
}
module.exports = Basic;
