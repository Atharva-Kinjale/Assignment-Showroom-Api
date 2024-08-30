const locationServices = require("../Services/locationServices");
// find all locations
exports.getAllLocations = async (req, res) => {
  try {
    // const users = await User.findAll();
    const locations = await locationServices.getAll();
    res.send(locations);
  } catch (err) {
    res.status(404).json({ staus: " Failure", message: err });
  }
};

// Create a location
exports.createlocation = async (req, res, next) => {
  try {
    const location = await locationServices.createLoc(req.body);
    console.log(location);

    res.status(200).send(location);
  } catch (err) {
    res.status(404).json({ staus: " Failure", message: err });
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

    res.status(200).json({ status: "success", data: { locations: loc } });
  } catch (err) {
    console.log(err);
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
      .status(200)
      .json({ status: "Success", data: { locations: updatedloc } });
  } catch (err) {
    console.log(err);
  }
};

// delete location
exports.deletedlocation = async (req, res) => {
  try {
    await locationServices.deleteLocData(req.params.id);
    // console.log(updatedUser);
    res.status(200).json({ statusss: "Success", data: null });
    // res.send("ghjkh");
  } catch (err) {
    console.log(err);
  }
};
