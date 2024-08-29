const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();

// datbase connection and syncing
const sequelize = require("./utils/connection");
const User = require("./scr/models/user");

sequelize.sync({ alter: true });
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
console.log(PORT);
// console.log(process.cwd());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
