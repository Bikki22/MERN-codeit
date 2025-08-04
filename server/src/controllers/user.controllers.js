import { UserRoleEnum } from "../constants";
import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while creating a access token" });
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, fullname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      fullname,
      email,
      password: hashedPassword,
      isEmailVerified: false,
      role: role || UserRoleEnum.USER,
    });

    const { hashedToken, unhashedToken, tokenExpiry } =
      user.generateTemporaryToken();

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiry = tokenExpiry;

    await user.save({ validateBeforeSave: false });

    // nodemailer

    const createUser = await User.findById(user._id).select(
      "-password -emailVerificationToken -emailVerificationExpiry"
    );

    if (!createUser) {
      res
        .status(500)
        .json({ message: "something went wrong while registering " });
    }

    const { accessToken, refreshToken } = generateAccessTokenAndRefreshToken(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("accessToken", accessToken, options);
    res.cookie("refreshToken", refreshToken, options);

    return res.status(201).json({
      message: "User registered successfully",
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({ message: "somethign went wrong in registering " });
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid password" });
    }

    const { accessToken, refreshToken } = generateAccessTokenAndRefreshToken(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, user, "Logged in successfully"));
  } catch (error) {
    throw new ApiError(400, "login failed");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          refreshToken: "",
          accessToken: "",
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    res.clearCookie("accessToken", options);
    res.clearCookie("accessToken", options);

    res
      .status(200)
      .json({ message: "user logged out successfully", data: user });
  } catch (error) {
    throw Error("Error in logout user", error);
  }
});

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User doesnot exists" });
    }

    const { unhashedToken, hashedToken, tokenExpiry } =
      user.generateTemporaryToken();

    // Email sender

    user.forgotPasswordToken = hashedToken;
    user.forgotPasswordExpiry = tokenExpiry;

    await user.save({ validateBeforeSave: false });
  } catch (error) {}
};
const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);

  const isPasswordValid = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid Old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});
const getUser = asyncHandler(async (req, res) => {
  return res
    .json(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  changeCurrentPassword,
  getUser,
};
