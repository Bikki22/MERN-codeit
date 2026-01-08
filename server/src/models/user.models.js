import mongoose from "mongoose";
import {
  AvailableUserRoles,
  USER_TEMPORARY_TOKEN_EXPIRY,
  UserRoleEnum,
} from "../constants.js";
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
    roles: {
      type: [String],
      enum: AvailableUserRoles,
      default: [UserRoleEnum.USER],
    },
    phone: {
      type: String,
      requried: true,
      // validate: {
      //   validator: (value) => {
      //     const phoneRegex = process.env.PHONE_REGEX;
      //     return phoneRegex.test(value);
      //   },
      //   message: "Invalid email address.",
      // },
      unique: true,
    },
    profileImageUrl: {
      type: String,
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
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id, roles: this.roles },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIREY_TIME,
    }
  );
};
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, roles: this.roles },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIREY_TIME,
    }
  );
};

userSchema.methods.generateTemporaryToken = function () {
  const unhashedToken = crypto.randomBytes(20).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(unhashedToken)
    .digest("hex");

  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;

  return { unhashedToken, hashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);
