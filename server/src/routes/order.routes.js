import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrders,
} from "../controllers/order.controllers.js";
import { verifyJWT, verifyPermission } from "../middlewares/auth.middlewares";
import { UserRoleEnum } from "../constants";

const router = express.Router();

router
  .route("/")
  .get(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), getOrders);
router.route("/").post(verifyJWT, createOrder);
router
  .route("/:id")
  .delete(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), deleteOrder);

export default router;
