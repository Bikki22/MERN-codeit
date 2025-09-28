import { Cart } from "../models/cart.models";
import { Product } from "../models/product.models";
import { asyncHandler } from "../utils/AasyncHander";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

const getCart = async (userId) => {
  const cartAggregation = await Cart.aggregate([
    { $match: { owner: userId } },
    { $unwind: "$items" },
    {
      $lookup: {
        from: "products",
        localField: "items.productId",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $project: {
        _id: "$_id",
        product: { $first: "$product" },
        quantity: "$items.quantity",
      },
    },
    {
      $group: {
        _id: "$_id",
        items: { $push: "$$ROOT" },
        cartTotal: {
          $sum: { $multiply: ["$product.price", "$quantity"] },
        },
      },
    },
  ]);

  return (
    cartAggregation[0] ?? {
      _id: null,
      items: [],
      cartTotal: 0,
    }
  );
};

const getUserCart = asyncHandler(async (req, res) => {
  const cart = await getCart(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart fetched successfully"));
});

const addItemOrUpdateItemQuantity = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { quantity = 1 } = req.body;

  // fetch user cart
  const cart = await Cart.findOne({
    owner: req.user._id,
  });

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(404, "Product doesnot exists");
  }

  if (quantity > product.stock) {
    throw new ApiError(
      400,
      product.stock > 0
        ? "only" +
          product.stock +
          " product are remaining. But you are adding" +
          quantity
        : "product is out of stock"
    );
  }

  const addedProduct = cart.items?.find(
    (item) => item.productId.toString() === productId
  );

  if (addedProduct) {
    addedProduct.quantity = quantity;
  }

  await cart.save({ validateBeforeSave: true });

  const newCart = await getCart(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, newCart, "items added successfully"));
});

const removeItemFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(404, "product doesnot exists");
  }

  const updatedCart = await Cart.findOneAndUpdate(
    {
      owner: req.user._id,
    },
    {
      $pull: {
        items: {
          productId: productId,
        },
      },
    },
    {
      new: true,
    }
  );

  let cart = await getCart(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart item removed successfully"));
});

const clearCart = asyncHandler(async (req, res) => {
  await Cart.findOneAndUpdate(
    {
      owner: req.user._id,
    },
    {
      $set: {
        items: [],
      },
    },
    {
      new: true,
    }
  );

  const cart = await getCart(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart has been cleared"));
});

export {
  getCart,
  getUserCart,
  addItemOrUpdateItemQuantity,
  removeItemFromCart,
  clearCart,
};
