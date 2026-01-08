import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import uploadFile from "../utils/file.js";

export const createUser = asyncHandler(async (req, res) => {
  try {
    const createdUser = await User.create(req.body);

    res.status(201).json({ message: "user created successfully", createdUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { username, email, password, phone, roles } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email, password, phone, roles },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "User credentials updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const data = await User.find();
  res.status(200).json({ message: "All Users fetched", data });
});

export const getUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const userById = await User.findById(id);

    res
      .status(200)
      .json({ message: "fetched particular user", user: userById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    res
      .status(200)
      .json({ message: "User deleted successfully0", deletedUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!req.file) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Profile image is required"));
  }

  const uploadedFiles = await uploadFile([req.file]);

  const user = await User.findByIdAndUpdate(
    id,
    {
      profileImageUrl: uploadedFiles[0].secure_url,
    },
    { new: true }
  );

  res
    .status(200)
    .json(new ApiResponse(200, user, "Profile updated successfully"));
});
