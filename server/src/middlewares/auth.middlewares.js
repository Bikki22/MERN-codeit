import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = async (req, res, next) => {
  const token =
    req.cookie.authToken || req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    res.status(401).json({ message: "Unauthorized request" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken -emailVerification -emailVerificationExpiry"
    );

    if (!user) {
      res.status(401).json({ message: "Invalid access token" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: error.message || "Invalid access token " });
  }
};

export const verifyPermission = (roles = []) => {
  return (req, res, next) => {
    if (req.user._id) {
      throw new Error("Unauthorized Error");
    }
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "You are not allowed to perform this action" });
    }
  };
};
