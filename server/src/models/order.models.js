import mongoose from "mongoose";
import {
  AvailableOrderStatuses,
  AvailablePaymentProvider,
  OrderStatusEnum,
  PaymentProviderEnum,
} from "../constants";

const orderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
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
      default: [],
    },
    status: {
      type: String,
      default: OrderStatusEnum.PENDING,
      enum: AvailableOrderStatuses,
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
    paymentProvider: {
      type: String,
      enum: AvailablePaymentProvider,
      default: PaymentProviderEnum.KHALTI,
    },
    paymentId: {
      type: String,
    },
    isPaymentDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
