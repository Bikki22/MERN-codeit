import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required."],
    },
    method: {
      type: String,
      required: [true, "Payment method is required."],
      enum: ["cash", "card", "online"],
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
    paymentStatus: {
      type: String,
      enum: AvailablePaymentStatus,
      default: PaymentStatusEnum.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model("Payment", paymentSchema);
