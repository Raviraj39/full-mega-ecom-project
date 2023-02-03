const ErrorHandler = require("../utils/errorHandler");
const catchAsynErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

//register a user
exports.registerUser = catchAsynErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avtar: {
      public_id: "this is public id",
      url: "profileurl",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
});
