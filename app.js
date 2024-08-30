const express = require("express");
const app = express();
const userRouter = require("./scr/Routes/userRouter");
const locationRouter = require("./scr/Routes/locationRouter");
// middleware for post request
app.use(express.json());

// ROUTES
app.use("/api/user", userRouter);
app.use("/api/location", locationRouter);
// app.get("/", (req, res) => {
//   res.send("hello");
// });

module.exports = app;
