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

router.route("/").get(getAllProduct);
router.route("/:id").get(getAllProductById);
router
  .route("/")
  .post(
    verifyJWT,
    verifyPermission([UserRoleEnum.ADMIN], [UserRoleEnum.MERCHANT]),
    createProduct
  );
router
  .route("/:id")
  .put(
    verifyJWT,
    verifyPermission([UserRoleEnum.ADMIN], [UserRoleEnum.MERCHANT]),
    updateProduct
  );
router
  .route("/:id")
  .delete(
    verifyJWT,
    verifyPermission([UserRoleEnum.ADMIN], [UserRoleEnum.MERCHANT]),
    deleteProduct
  );

export default router;
