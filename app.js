const express = require("express");
const app = express();
const userRouter = require("./scr/Routes/userRouter");
const locationRouter = require("./scr/Routes/locationRouter");
const customerRouter = require("./scr/Routes/customerRouter");
const employeeRouter = require("./scr/Routes/employeeRoutes");
const carRouter = require("./scr/Routes/carRouter");
const orderRouter = require("./scr/Routes/orderRouter");
const serviceDetailsRouter = require("./scr/Routes/servicedetailsRouter");
const paymentRouter = require("./scr/Routes/paymentRouter");
const CSMapRouter = require("./scr/Routes/carServicesMapRouter");
const ESMapRouter = require("./scr/Routes/EmpServiceMapRouter");
// middleware for post request
app.use(express.json());
const AppError = require("./utils/appError");
const globalErrorhandler = require("./scr/controller/errorContoller");
// ROUTES
app.use("/api/user", userRouter);
app.use("/api/location", locationRouter);
app.use("/api/customer", customerRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/car", carRouter);
app.use("/api/orderDetails", orderRouter);
app.use("/api/serviceDetails", serviceDetailsRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/carServiceMap", CSMapRouter);
app.use("/api/employeeServicesMap", ESMapRouter);
// app.get("/", (req, res) => {
//   res.send("hello");
// });

// placed at last because if put firstit will allways executes first than other routes
app.all("*", (req, res, next) => {
  //   res.status(404).json({
  //     status: "Fail",
  //     message: `Can't find ${req.originalUrl} on this server`,
  //   });
  //   const err = new Error(`Can't find ${req.originalUrl} on this server`);
  //   err.status = "Fail";
  //   err.statusCode = 404;
  //   next(err);

  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// error handling middleware
app.use(globalErrorhandler);

module.exports = app;
