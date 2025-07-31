import mongoose from "mongoose";
import { AvailableOrderStatuses, OrderStatusEnum } from "../constants";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            min: [1, "Quantity cannot be less than 1"],
            default: 1,
          },
        },
      ],
      default: [],
    },
    status: {
      type: String,
      default: OrderStatusEnum.PENDING,
      enum: AvailableOrderStatuses,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
        default: "Nepal",
      },
      street: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
