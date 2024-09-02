const { DataTypes, where } = require("sequelize");
const errCodes = require("./errorMessages");
const sequelize = require("../../models/index").sequelize;
const { Op } = require("sequelize");
// const Location = require("../../models/location")(sequelize, DataTypes);
const { User, Location } = require("../../models");
//
//
class APIFeatures {
  // constructor(queryparams) {
  //   this.queryparams = queryparams;
  // }
  filtering(queryparams) {
    const queryObj = { ...queryparams };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log("req.query", queryObj);
    return queryObj;
  }
  Sorting(queryparams) {
    let sortOrder = [];
    if (queryparams.sort) {
      sortBy = queryparams.sort.split(",");
      sortBy.forEach((el) => {
        if (el.startsWith("-")) {
          sortOrder.push([el.slice(1, el.length), "DESC"]);
        } else {
          sortOrder.push([el.slice(0, el.length), "ASC"]);
        }
      });
    } else {
      sortOrder = [["createdAt", "DESC"]];
    }
    console.log(sortOrder);
    return sortOrder;
  }
  fieldLimit(queryparams) {
    // IV)Field limiting
    let fields;
    if (queryparams.fields) {
      fields = queryparams.fields.split(",");
      console.log(fields);
    }
    return fields;
  }

  pagination(queryparams) {
    // V)Pagination
    const page = +queryparams.page || 1;
    const limit = +queryparams.limit || 10;
    const skip = (page - 1) * limit;
    console.log(skip);
    return { page, skip };
  }
}
// ------------------------------------------------------------

exports.getAll = async (queryparams) => {
  try {
    // filtering I
    const queryObj = { ...queryparams };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log("req.query", queryObj);

    // II) Advance Filtering II for lesthan ,greaterthan filter
    // not working
    // let queryStr = JSON.stringify(queryObj);
    // // console.log(queryStr);

    // queryStr = queryStr.replace(
    //   /\b(gte|gt|lte|lt)\b/g,
    //   (match) => `[Op.${match}]`
    // );
    // console.log(JSON.parse(queryStr));
    // III)sorting
    let sortOrder = [];
    if (queryparams.sort) {
      sortBy = queryparams.sort.split(",");
      sortBy.forEach((el) => {
        if (el.startsWith("-")) {
          sortOrder.push([el.slice(1, el.length), "DESC"]);
        } else {
          sortOrder.push([el.slice(0, el.length), "ASC"]);
        }
      });
    } else {
      sortOrder = [["createdAt", "DESC"]];
    }
    console.log(sortOrder);
    // IV)Field limiting
    let fields;
    if (queryparams.fields) {
      fields = queryparams.fields.split(",");
      console.log(fields);
    }
    //
    // V)Pagination
    const page = +queryparams.page || 1;
    const limit = +queryparams.limit || 10;
    const skip = (page - 1) * limit;
    console.log(skip);

    // if (queryparams.page) {
    //   const numLocations = await Location.Count();
    //   if (skip >= numLocations) {
    //     throw new Error("This page doesnot Exist");
    //   }
    // }

    // const locData = Location.findAll();
    const locData = Location.findAll({
      attributes: fields,
      where: queryObj,
      order: sortOrder,
      limit: limit,
      offset: skip,
      // where: { pincode: { [Op.gte]: "100002" } },
      // order: [["createdAt", "DESC"]],
    });
    return locData;
  } catch (err) {
    console.log(err);
  }
};

exports.createLoc = (data) => {
  try {
    const { pincode, city, State, Country } = data;
    const locD = { pincode, city, State, Country };
    const newLoc = Location.create(locD);
    return newLoc;
  } catch (err) {
    console.log(err);
  }
};

const getlocbyId = (id) => {
  try {
    const loc = Location.findOne({ where: { pincode: id } });
    return loc;
  } catch (err) {
    console.log(err);
  }
};

exports.getbyId = getlocbyId;

exports.updateLocData = async (body, id) => {
  // getUserbyId()
  // // getbyId()
  // const usertemp = User.findOne({ where: { user_Id: id } });
  // usertemp.Email = body.Email;
  try {
    const loc = await Location.update(
      { ...body },
      {
        where: { pincode: id },
      }
    );
    if (loc) {
      const updatedloc = getlocbyId(id);

      return updatedloc;
    }
    // return user;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteLocData = (id) => {
  try {
    const loc = Location.destroy({ where: { pincode: id } });
    if (loc) {
      const updatedloc = getlocbyId(id);
      console.log(updatedloc);

      return updatedloc;
    }
  } catch (err) {
    console.log(err);
  }
};

// const { Op } = require("sequelize");
// const { User, Location } = require("../../models");
// // Assuming Location model is imported from your models

// exports.getAll = async (queryparams) => {
//   try {
//     // I) Filtering
//     const queryObj = filterQuery(queryparams);
//     console.log("Filtered Query:", queryObj);

//     // II) Advanced Filtering for less than, greater than
//     const advancedQueryObj = applyAdvancedFiltering(queryObj);
//     console.log("Advanced Filtered Query:", advancedQueryObj);

//     // III) Sorting
//     const sortOrder = applySorting(queryparams.sort);
//     console.log("Sort Order:", sortOrder);

//     // IV) Field Limiting
//     const fields = applyFieldLimiting(queryparams.fields);
//     console.log("Fields:", fields);

//     // V) Pagination
//     const { limit, offset } = applyPagination(
//       queryparams.page,
//       queryparams.limit
//     );
//     console.log("Pagination - Limit:", limit, "Offset:", offset);

//     // Fetching data with applied filters, sorting, pagination, and field limiting
//     const locData = await Location.findAll({
//       attributes: fields,
//       where: advancedQueryObj,
//       order: sortOrder,
//       limit,
//       offset,
//     });

//     return locData;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Error fetching data");
//   }
// };

// // Function to filter query parameters by excluding specific fields
// function filterQuery(queryparams) {
//   const queryObj = { ...queryparams };
//   const excludedFields = ["page", "sort", "limit", "fields"];
//   excludedFields.forEach((el) => delete queryObj[el]);
//   return queryObj;
// }

// // Function to apply advanced filtering for less than, greater than, etc.
// function applyAdvancedFiltering(queryObj) {
//   let queryStr = JSON.stringify(queryObj);
//   queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => {
//     return `[Op.${match}]`;
//   });
//   console.log(JSON.parse(queryStr));

//   return JSON.parse(queryStr);
// }

// // Function to apply sorting
// function applySorting(sortParams) {
//   if (!sortParams) return [["createdAt", "DESC"]]; // Default sort order

//   return sortParams.split(",").map((param) => {
//     if (param.startsWith("-")) {
//       return [param.slice(1), "DESC"];
//     } else {
//       return [param, "ASC"];
//     }
//   });
// }

// // Function to apply field limiting
// function applyFieldLimiting(fieldsParam) {
//   return fieldsParam ? fieldsParam.split(",") : undefined;
// }

// // Function to apply pagination
// function applyPagination(pageParam, limitParam) {
//   const page = parseInt(pageParam, 10) || 1;
//   const limit = parseInt(limitParam, 10) || 10;
//   const offset = (page - 1) * limit;
//   return { limit, offset };
// }
