import express from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  addItemOrUpdateItemQuantity,
  clearCart,
  getUserCart,
  removeItemFromCart,
} from "../controllers/cart.controllers.js";

const router = express.Router();

router.use(verifyJWT);

router.route("/").get(getUserCart);

router.route("/clear").delete(clearCart);

router
  .route("/item/:productId")
  .post(addItemOrUpdateItemQuantity)
  .delete(removeItemFromCart);

export default router;
