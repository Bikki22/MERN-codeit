import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: {
      type: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            requried: true,
            min: [1, "Quantity can not be less than 1"],
            default: 1,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
