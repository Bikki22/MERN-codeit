import { body } from "express-validator";
import { AvailableUserRoles } from "../constants.js";

const userRegisterValidation = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLowercase()
      .withMessage("Username must be lower")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 character"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("password is required")
      .isStrongPassword()
      .withMessage("strong password is required"),
    body("role")
      .optional()
      .isIn(AvailableUserRoles)
      .withMessage("Invalid user roles"),
  ];
};

const userLoginValidator = () => {
  return [
    body("username")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLowercase()
      .withMessage("username must be in lower case"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password").trim().notEmpty().withMessage("password is requried"),
  ];
};

const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword").notEmpty().withMessage("old password is required"),
    body("newPassword").notEmpty().withMessage("new password is required"),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isLowercase()
      .withMessage("Email must be in lower case"),
  ];
};

export {
  userRegisterValidation,
  userLoginValidator,
  userForgotPasswordValidator,
  userChangeCurrentPasswordValidator,
};
