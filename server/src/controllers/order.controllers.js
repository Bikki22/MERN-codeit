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
import payment from "../utils/payment.js";
import { Payment } from "../models/payment.models.js";

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("items.product")
    .populate("customer", ["username", "email", "phone", "address"]);

  return res
    .status(200)
    .json(new ApiResponse(200, orders, "all orders are fetched successfullly"));
});

const getOrderById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, order, "order by id fetched successfully"));
  } catch (error) {
    throw new ApiError(500, "Error in getOrderById");
  }
});

const getOrderByUser = asyncHandler(async (req, res) => {
  const query = req.query;
  const id = req.user._id;

  const orders = await Order.find({
    status: query?.status || OrderStatusEnum.PENDING,
    customer: id,
  })
    .sort({ createdAt: -1 })
    .populate("customer", ["username", "email", "phone", "address"])
    .populate("items.product");

  res
    .status(200)
    .json(new ApiResponse(200, orders, "order fetched successfully"));
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

// const orderPaymentViaKhalti = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const order = await Order.findById(id);

//     if (!order) throw new ApiError(404, "Order not found");

//     if (order.customer._id != req.user._id) {
//       throw new ApiError(403, "Access Denied!");
//     }

//     const transactionId = crypto.randomUUID();

//     const orderPayment = await Payment.create({
//       amount: order.totalPrice,
//       method: "online",
//       transactionId,
//     });

//     console.log("orderPayment", orderPayment);

//     await Order.findByIdAndUpdate(id, {
//       payment: orderPayment._id.toString(),
//     });

//     return await payment.payViaKhalti({
//       amount: order.totalPrice,
//       purchaseOrderId: id,
//       purchaseOrderName: order._id,
//       customer: order.customer,
//     });
//   } catch (error) {
//     console.error("Payment Error:", error);
//     throw new ApiError(400, "Error in payment");
//   }
// });

const orderPaymentViaKhalti = asyncHandler(async (req, rs) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) throw new ApiError(404, "Order not found");

    if (order.customer._id != req.user._id) {
      throw new ApiError(403, "Access Denied!");
    }

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
      purchaseOrderId: id,
      purchaseOrderName: order._id,
      customer: order.customer,
    });
  } catch (error) {
    console.error("Payment Error:", error);
    throw new ApiError(400, "Error in payment");
  }
});

const confirmOrderPayment = asyncHandler(async (req, res) => {
  const id = req.params;
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

const updateOrderStatus = asyncHandler(async (req, res) => {
  const id = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(id);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }

    if (
      order.customer._id != req.user._id &&
      !req.user.roles.includes(UserRoleEnum.ADMIN)
    ) {
      throw new ApiError(403, "Access Denied!");
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      {
        new: true,
      }
    );

    res
      .status(200)
      .json(new ApiResponse(200, updatedOrder, "order updates successfully"));
  } catch (error) {
    throw new ApiError(
      500,
      error.message || "Something went wrong while updating order"
    );
  }
});

export {
  getOrders,
  createOrder,
  getOrderByUser,
  deleteOrder,
  getOrderById,
  orderPaymentViaKhalti,
  confirmOrderPayment,
  updateOrderStatus,
};
