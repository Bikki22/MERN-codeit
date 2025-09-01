import express from "express";
import {
  confirmOrderPayment,
  createOrder,
  deleteOrder,
  getOrderById,
  getOrders,
  orderPaymentViaKhalti,
  updateOrder,
} from "../controllers/order.controllers.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";
import { UserRoleEnum } from "../constants.js";

const router = express.Router();

router
  .route("/")
  .get(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), getOrders);
router
  .route("/:id")
  .get(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), getOrderById);

router.route("/").post(verifyJWT, createOrder);
router.route("/:id").put(verifyJWT, updateOrder);
router
  .route("/:id")
  .delete(verifyJWT, verifyPermission([UserRoleEnum.ADMIN]), deleteOrder);

// URL:  /api/orders/:id/payment
router.route("/:id/payment/khalti").post(verifyJWT, orderPaymentViaKhalti);
router.route("/:id/confirm-payment").post(verifyJWT, confirmOrderPayment);

export default router;
