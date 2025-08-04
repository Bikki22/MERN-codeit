import express from "express";
import {
  changeCurrentPassword,
  forgotPassword,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controllers.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidation,
} from "../validators/user.validation.js";

const router = express.Router();

router.route("/register").post(userRegisterValidation, registerUser);
router.route("/login").post(userLoginValidator, loginUser);
router.route("/logout").post(logoutUser);
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator, forgotPassword);
router
  .route("/change-password")
  .post(userChangeCurrentPasswordValidator, changeCurrentPassword);
router.route("/user").post(getUser);

export default router;
