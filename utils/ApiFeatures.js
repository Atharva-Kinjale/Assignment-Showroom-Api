//
class APIFeatures {
  constructor(queryparams) {
    this.queryparams = queryparams;
  }
  filtering() {
    const queryObj = { ...this.queryparams };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log("req.query", queryObj);
    return queryObj;
  }
  Sorting() {
    let sortOrder = [];
    if (this.queryparams.sort) {
      let sortBy = this.queryparams.sort.split(",");
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
  fieldLimit() {
    // IV)Field limiting
    let fields;
    if (this.queryparams.fields) {
      fields = this.queryparams.fields.split(",");
      console.log(fields);
    }
    return fields;
  }

  pagination() {
    // V)Pagination
    const page = +this.queryparams.page || 1;
    const limit = +this.queryparams.limit || 10;
    const skip = (page - 1) * limit;
    console.log(skip);
    return { limit, skip };
  }
}
module.exports = APIFeatures;
