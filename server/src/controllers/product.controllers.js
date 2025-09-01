import { PRODUCT_DESCRIPTION_PROMPT, UserRoleEnum } from "../constants.js";
import { Product } from "../models/product.models.js";
import { asyncHandler } from "../utils/AasyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import uploadFile from "../utils/file.js";
import promptGemini from "../utils/gemini.js";

// Get all products with filters, sorting, and pagination
export const getAllProduct = asyncHandler(async (req, res) => {
  const { brand, category, limit, offset, min, max, name, sort } = req.query;
  const sortObj = sort ? JSON.parse(sort) : {};

  const filters = {};
  if (brand) filters.brand = { $in: brand.split(",") };
  if (category) filters.category = category;
  if (min) filters.price = { $gte: Number(min) };
  if (max) filters.price = { ...filters.price, $lte: Number(max) };
  if (name) filters.name = { $regex: name, $options: "i" };

  const allProducts = await Product.find(filters)
    .sort(sortObj)
    .limit(Number(limit) || 0)
    .skip(Number(offset) || 0);

  res
    .status(200)
    .json(new ApiResponse(200, allProducts, "All products fetched"));
});

// Get product by ID
export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) throw new ApiError(404, "Product not found");

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product fetched successfully"));
});

// Create a new product
export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, category, stock, brand, description } = req.body;
  const owner = req.user._id;

  // Upload images to Cloudinary
  const uploadedFiles = await uploadFile(req.files);

  if (!req.files) {
    return res.status(400).json({ message: "At least one image is required" });
  }

  // Generate product description if not provided
  const promptMessage = PRODUCT_DESCRIPTION_PROMPT.replace("%s", name)
    .replace("%s", brand)
    .replace("%s", category);

  const productDescription = description ?? (await promptGemini(promptMessage));

  const product = await Product.create({
    name,
    price,
    category,
    stock,
    brand,
    description: productDescription,
    owner,
    imageUrls: uploadedFiles.map((item) => item?.url),
  });

  res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});

// Update product
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, category, stock, brand, description } = req.body;

  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  if (
    product.owner.toString() !== req.user._id.toString() &&
    !req.user.role.includes(UserRoleEnum.ADMIN)
  ) {
    throw new ApiError(403, "Access denied");
  }

  // Upload new images if provided
  let imageUrls = product.imageUrls || [];
  if (req.files && req.files.length > 0) {
    const uploadResults = await uploadFile(req.files);
    imageUrls = uploadResults.map((file) => file.secure_url);
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      name,
      price,
      category,
      stock,
      brand,
      description,
      imageUrls,
    },
    { new: true }
  );

  res
    .status(200)
    .json(new ApiResponse(200, updatedProduct, "Product updated successfully"));
});

// Delete product
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  if (
    product.owner.toString() !== req.user._id.toString() &&
    !req.user.role.includes(UserRoleEnum.ADMIN)
  ) {
    throw new ApiError(403, "Access denied");
  }

  await Product.findByIdAndDelete(id);

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Product deleted successfully"));
});
