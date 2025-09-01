import {
  OrderStatusEnum,
  PaymentStatusEnum,
  UserRoleEnum,
} from "../constants.js";
import { Order } from "../models/order.models.js";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("items.product")
    .populate("customer", ["username", "email", "phone", "address"]);

  return res
    .status(200)
    .json(new ApiResponse(200, orders, "all orders are fetched successfullly"));
});

const getOrderById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const order = await Order.findById(id);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, order, "order by id fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "Error in getOrderById");
  }
});

const createOrder = asyncHandler(async (req, res) => {
  const data = req.body;
  const userId = req.user._id; //comes from jwt middleware

  const orderedId = crypto.randomBytes(10).toString("hex");

  const orders = await Order.create({
    ...data,
    orderId: orderedId,
    customer: userId,
  });

  res.status(201).json(new ApiResponse(201, orders, "Order is created"));
});

const deleteOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedOrder = await Order.findByIdAndDelete(id);

  return res
    .status(200)
    .json(new ApiResponse(200, deletedOrder, "Order deleted Successfully"));
});

const orderPaymentViaKhalti = asyncHandler(async (req, res) => {
  const { id } = req.body;

  try {
    const order = await Order.findById(id);

    const transactionId = crypto.randomUUID();

    const orderPayment = await Payment.create({
      amount: order.totalPrice,
      method: "online",
      transactionId,
    });

    await Order.findByIdAndUpdate(id, {
      payment: orderPayment._id,
    });

    return await payment.payViaKhalti({
      amount: order.totalPrice,
      purchaseOrderId: order.id,
      purchaseOrderName: order.orderNumber,
      customer: order.user,
    });
  } catch (error) {
    throw new ApiError(400, "Error in payment", error);
  }
});

const confirmOrderPayment = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const { status } = req.body;

  try {
    const order = Order.findById(id);

    if (status.toUpperCase() != PaymentStatusEnum.COMPLETED) {
      await Payment.findByIdAndUpdate(order.payment._id, {
        status: "failed",
      });
      throw new ApiError(400, "Payment failed");
    }

    await Payment.findByIdAndUpdate(order.payment._id, {
      status: PaymentStatusEnum.COMPLETED,
    });

    return await Order.findByIdAndUpdate(
      id,
      {
        status: OrderStatusEnum.CONFIRMED,
      },
      {
        new: ture,
      }
    );
  } catch (error) {
    throw new ApiError(400, "Error in confirming", error);
  }
});

const updateOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const order = await Order.findById(id);
    console.log(order);

    if (!order) {
      throw new ApiError(400, "mistake garis order id ma");
    }

    if (
      order.customer._id != req.user._id &&
      !req.user.roles.includes(UserRoleEnum.ADMIN)
    ) {
      throw new ApiError(403, "Tw you kam garna paudinas");
    }

    res
      .status(200)
      .json(new ApiResponse(200, order, "order updates successfully"));
  } catch (error) {}
});

export {
  getOrders,
  createOrder,
  deleteOrder,
  getOrderById,
  orderPaymentViaKhalti,
  confirmOrderPayment,
  updateOrder,
};
