import { login } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("refreshToken", response.data?.refreshToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await register(data);
      localStorage.setItem("refreshToken", response?.data?.refreshToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
