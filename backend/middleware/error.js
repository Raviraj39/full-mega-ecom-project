const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 404; //it shows a error
  err.message = err.message || "internal server error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message, //message
    error: err.stack, //gives exact location of error code
  });
};
