import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductById,
  updateProduct,
} from "../controllers/product.controllers.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";
import { UserRoleEnum } from "../constants.js";

const router = express.Router();

const allowedRoles = [UserRoleEnum.ADMIN, UserRoleEnum.MERCHANT];

router.route("/").get(getAllProduct);
router.route("/:id").get(getAllProductById);
router
  .route("/")
  .post(verifyJWT, verifyPermission(allowedRoles), createProduct);
router
  .route("/:id")
  .put(verifyJWT, verifyPermission(allowedRoles), updateProduct);
router
  .route("/:id")
  .delete(verifyJWT, verifyPermission(allowedRoles), deleteProduct);

export default router;
