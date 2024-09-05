const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    // stack: err.stack,
  });
};
const sendErrorProd = (err, res) => {
  // only for Opretional error
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // 1)logging error
    console.error("ERROR !", err);
    //2)sending genric message
  } else {
    res.status(500).json({
      status: "error",
      message: "something went wrong!",
      // err: err,
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    if (err.name === "SequelizeUniqueConstraintError") {
      console.error("Unique constraint violation:", err.errors[0].message);
    }
    if (err.name === "SequelizeForeignKeyConstraintError") {
      console.error("Unique constraint violation:", err.errors[0].message);
    }
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, res);
  }
  //   res.status(err.statusCode).json({
  //     status: err.status,
  //     error: err,
  //     message: err.message,
  //     stack: err.stack,
  //   });
};
