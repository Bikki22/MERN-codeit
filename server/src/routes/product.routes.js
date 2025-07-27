import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductById,
  updateProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.route("/").get(getAllProduct);
router.route("/:id").get(getAllProductById);
router.route("/").post(createProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);

export default router;
