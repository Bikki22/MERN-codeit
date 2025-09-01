import mongoose from "mongoose";
import {
  AvailableOrderStatuses,
  AvailablePaymentProvider,
  OrderStatusEnum,
  PaymentProviderEnum,
  PaymentStatusEnum,
} from "../constants.js";

const orderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
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

    shippingAddress: {
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        default: "Nepal",
      },
      province: {
        type: String,
        required: true,
      },
      street: {
        type: String,
      },
    },
    status: {
      type: String,
      default: OrderStatusEnum.PENDING,
      enum: AvailableOrderStatuses,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
