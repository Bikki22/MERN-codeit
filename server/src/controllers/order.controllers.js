import { Order } from "../models/order.models.js";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("items.product")
    .populate("user", ["name", "email", "phone", "address"]);

  return res
    .status(200)
    .json(new ApiResponse(200, orders, "all orders are fetched successfullly"));
});

const getOrderById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id)
      .populate("items.product")
      .populate("user", ["name", "email", "phone", "address"]);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }
  } catch (error) {
    throw new ApiError(500, "Error in getOrderById", error);
  }
});

const createOrder = asyncHandler(async (req, res) => {
  const data = req.body;
  const userId = req.user._id; //comes from jwt middleware

  const orderId = crypto.randomBytes(10).toString("hex");

  const orders = await Order.create({ ...data, orderId, user: userId });

  res.status(201).json(201, orders, "orders created successfully");
});

const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedOrder = await Order.findByIdAndDelete(id);

  return res
    .status(200)
    .json(new ApiResponse(200, deletedOrder, "Order deleted Successfully"));
});

export { getOrders, createOrder, deleteOrder, getOrderById };
