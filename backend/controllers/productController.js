const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
//create product -ADMIN
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//GET ALL PRODUCTS
exports.getAllProduct = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;

  res.status(200).json({ success: true, products });
});

//Get product  details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found"), 404);
  }
  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

//update product --admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not updated"), 404);
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//delete product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found"), 404);
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product delete succesfully",
  });
});
