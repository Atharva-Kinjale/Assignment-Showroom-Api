const express = require("express");
const app = express();
const userRouter = require("./scr/Routes/userRouter");
// middleware for post request
app.use(express.json());

// ROUTES
app.use("/api/user", userRouter);
// app.get("/", (req, res) => {
//   res.send("hello");
// });

module.exports = app;
