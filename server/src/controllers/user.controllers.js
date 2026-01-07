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
  const id = req.user._id;
  const file = req.file;

  const uploadedFile = await uploadFile([file]);

  const result = await User.findByIdAndUpdate(
    id,
    {
      profileImageUrl: uploadedFile[0].url,
    },
    {
      new: true,
    }
  );

  res
    .status(200)
    .json(new ApiResponse(200, result, "Profile Updated successfully"));
});
