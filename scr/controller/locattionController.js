const locationServices = require("../Services/locationServices");
const STATUSCODES = require("../Services/StatusCodes");
// find all locations
exports.getAllLocations = async (req, res) => {
  try {
    // const users = await User.findAll();
    const locations = await locationServices.getAll();
    res
      .status(STATUSCODES.OK)
      .json({ status: "success", data: { locations: locations } });
  } catch (err) {

    // amitesh : we should throw the error.
    res
      .status(STATUSCODES.NOT_FOUND)
      .json({ status: " Failure", message: err.message });
  }
};

// Create a location
exports.createlocation = async (req, res, next) => {
  try {
    const location = await locationServices.createLoc(req.body);
    console.log(location);

    res
      .status(STATUSCODES.CREATED)
      .json({ status: "success", data: { locations: location } });
  } catch (err) {
     // amitesh : we should throw the error.
    res
      // .status(STATUSCODES.NOT_FOUND)
      .json({ status: " Failure", message: err.message });
  }
  next();
};

// get location by id
exports.getlocationbyId = async (req, res) => {
  try {
    const id = req.params.id;
    // const user = await User.findOne({ where: { user_Id: id } });
    const loc = await locationServices.getbyId(id);
    // console.log(user.dataValues);

    res
      .status(STATUSCODES.OK)
      .json({ status: "success", data: { locations: locations } });
  } catch (err) {
     // amitesh : we should throw the error.
    res
      .status(STATUSCODES.NOT_FOUND)
      .json({ status: " Failure", message: err.message });
  }
};
// update locations
exports.updateLocation = async (req, res) => {
  // new User(...req.body);
  try {
    //   const updatedUser = await User.update(req.body, {
    //     where: { user_Id: req.params.id },
    //     returning: true,
    //   });

    const updatedloc = await locationServices.updateLocData(
      req.body,
      req.params.id
    );
    console.log(updatedloc);
    res
      .status(STATUSCODES.OK)
      .json({ status: "Success", data: { locations: updatedloc } });
  } catch (err) {
     // amitesh : we should throw the error.
    res
      .status(STATUSCODES.NOT_FOUND)
      .json({ status: " Failure", message: err.message });
  }
};

// delete location
exports.deletedlocation = async (req, res) => {
  try {
    await locationServices.deleteLocData(req.params.id);
    // console.log(updatedUser);
    res.status(STATUSCODES.NO_CONTENT).json({ status: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
     // amitesh : we should throw the error.
    res
      .status(STATUSCODES.INTERNAL_SERVER_ERROR)
      .json({ status: " Failure", message: err.message });
  }
};
