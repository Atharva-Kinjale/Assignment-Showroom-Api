const Sequelize = require("sequelize");
// const dotenv = require("dotenv");

require("dotenv").config();
console.log(process.env.SQL_DATABASE_NAME);
const sequelize = new Sequelize(
  process.env.SQL_DATABASE_NAME,
  process.env.SQL_DATABASE_USER,
  process.env.SQL_DATABASE_PASS,

  {
    dialect: "mysql",
    host: "localhost",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection success");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
