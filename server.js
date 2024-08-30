const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();

// datbase connection and syncing with connection.js in utils
const sequelize = require("./utils/connection");
sequelize.sync({ force: false });

// ---------------------------

// // for syncing and connection with index .js created with migration ie sequqlize cli

// const db = require("./models/index");
// // console.log(db.sequelize);

// // db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: false });
// ----------------------------------------------------------
// to enter data during suncing
// .then(() => {
//   const userInfo = User.build({
//     F_Name: "ATHARVA",
//     L_Name: "Kinjale",
//     Gneder: "male",
//   });
//   console.log(userInfo.toJSON());
// });
// --------------------------------------
const PORT = process.env.PORT || 3000;
// const PORT = 3000;

console.log(PORT);
// console.log(process.cwd());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
