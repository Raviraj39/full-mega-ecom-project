const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/products/new").get(createProduct);
router.route("/products/:id").get(updateProduct).delete(deleteProduct);

module.exports = router;
