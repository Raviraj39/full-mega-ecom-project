const Product = require("../models/productModels");

//create product -ADMIN
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//GET ALL PRODUCTS
exports.getAllProduct = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ success: true, products });
};
