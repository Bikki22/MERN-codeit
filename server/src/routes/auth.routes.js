import express from "express";
import {
  changeCurrentPassword,
  forgotPasswordRequest,
  getAllUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  resetForgottenPassword,
} from "../controllers/auth.controllers.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidation,
  userResetPasswordValidator,
} from "../validators/user.validation.js";
import {
  verifyJWT,
  verifyPermission,
} from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.route("/register").post(userRegisterValidation(), registerUser);
router.route("/login").post(userLoginValidator(), loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator(), forgotPasswordRequest);
router.post(
  "/reset-password",
  userResetPasswordValidator(),
  resetForgottenPassword
);

router
  .route("/change-password")
  .put(userChangeCurrentPasswordValidator(), changeCurrentPassword);
router.route("/profile").get(verifyJWT, getUserProfile);
router.route("/users").get(verifyJWT, verifyPermission(["ADMIN"]), getAllUsers);

export default router;
