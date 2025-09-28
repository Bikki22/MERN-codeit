import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    street: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model("Address", addressSchema);
