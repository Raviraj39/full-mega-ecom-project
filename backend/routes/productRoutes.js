const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const {isAuthenticatedUser,autherizeRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProduct);
router.route("/products/new").post(isAuthenticatedUser,autherizeRoles("admin") ,createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser,autherizeRoles("admin") ,updateProduct)
  .delete(isAuthenticatedUser,autherizeRoles("admin") ,deleteProduct)
  .get(getProductDetails);
module.exports = router;
