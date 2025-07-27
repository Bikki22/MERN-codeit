import mongoose from "mongoose";
import { AvailableUserRoles, UserRoleEnum } from "../constants.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      requried: true,
      trim: true,
    },
    role: {
      type: String,
      default: UserRoleEnum.USER,
      enum: AvailableUserRoles,
      requried: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        default: "Nepal",
      },
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationExpiry: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      required: true,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiry: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.method.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = function () {
  return jwt.sign({ id: userSchema._id }, process.env.ACCESS_TOKEN, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIREY_TIME,
  });
};
userSchema.method.generateRefreshToken = function () {
  return jwt.sign({ id: userSchema._id }, process.env.REFRESH_TOKEN, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIREY_TIME,
  });
};

userSchema.method.generateTemporaryToken = function () {
  const unhashedToken = crypto.randomBytes(20).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(unhashedToken)
    .digest("hex");

  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;

  return { unhashedToken, hashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);
