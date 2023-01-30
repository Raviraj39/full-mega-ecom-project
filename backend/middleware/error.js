const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; //it shows a error
  err.message = err.message || "internal server error";

  //Wrong MongoDb ID error

  if (err.name === "CastError") {
    const message = `Resource not found ,Invalid :${err.path}`;
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message, //message
    // error: err.stack, //gives exact location of error code
  });
};
