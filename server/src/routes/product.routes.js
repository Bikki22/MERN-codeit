import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getBrands,
  getCategory,
  getCount,
  getProductById,
  updateProduct,
} from "../controllers/product.controllers.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";
import { UserRoleEnum } from "../constants.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

const allowedRoles = [UserRoleEnum.ADMIN, UserRoleEnum.MERCHANT];

router.route("/").get(getAllProduct);
router.route("/brands").get(getBrands);
router.route("/count").get(getCount);
router.route("/categories").get(getCategory);
router
  .route("/")
  .post(
    verifyJWT,
    verifyPermission(["ADMIN", "MERCHANT"]),
    upload.array("images", 5),
    createProduct,
  );

router.route("/:id").get(getProductById);
router
  .route("/:id")
  .put(
    verifyJWT,
    verifyPermission(allowedRoles),
    upload.array("images", 5),
    updateProduct,
  );
router
  .route("/:id")
  .delete(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), deleteProduct);

export default router;
