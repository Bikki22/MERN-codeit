import { Product } from "../models/product.models.js";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllProduct = asyncHandler(async (req, res) => {
  const { brand, category, limit, offset, min, max, name } = req.query;
  const sort = JSON.parse(query.sort || "{}");

  const filters = {};

  if (brand) filters.brand = { $in: brand.split(",") };
  if (category) filters.category = category;
  if (min) filters.price = { $gte: min };
  if (max) filters.price = { ...filters.price, $lte: max };
  if (name) filters.name = { $regex: name, $options: "i" };

  try {
    const allProducts = await Product.find(filters)
      .sort(sort)
      .limit(limit)
      .skip(offset);

    return res.status(200).json({
      data: allProducts,
      message: "All Products are fetched",
    });
  } catch (error) {
    throw new ApiError(404, "Product not found");
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({ message: "product not found!" });
    }

    res.status(200).json({
      message: "product fetched successfully",
      data: product,
    });
  } catch (error) {
    throw new ApiError(500, "Error in finding product by id:");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, imageUrls, category, stock, brand, description } =
    req.body;
  const owner = req.user._id;
  const { files } = req.files;

  try {
    const product = await Product.create({
      name,
      price,
      imageUrls,
      category,
      stock,
      brand,
      description,
      owner,
      files,
    });

    res
      .status(201)
      .json(new ApiResponse(201, product, "successfully created new product"));
  } catch (error) {
    res.status(500).json({ message: "Error in creating product", error });
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { name, price, imageUrls, category, stock, brand, description } =
    req.body;
  const { files } = req.files;

  const product = await Product.findById(productId);

  if (product.owner != req.user?._id) {
    res.status(403).json({ message: "Access denied" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: {
          name,
          price,
          imageUrls,
          category,
          stock,
          brand,
          description,
          files,
        },
      },
      { new: true }
    );

    res.status(200).json({
      message: "Product detail updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Error in update product", error });
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (product.owner != req.user?._id) {
    res.status(403).json({ message: "Access denied" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    res
      .status(200)
      .json(new ApiResponse(200, deletedProduct, "Successfully deleted"));
  } catch (error) {
    throw new ApiError(500, "Error in delete product", error);
  }
});

export {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
