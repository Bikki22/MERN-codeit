import { Product } from "../models/product.models.js";

const getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();

    return res.status(200).json({
      data: allProducts,
      message: "All Products are fetched",
    });
  } catch (error) {
    res.status(500).json({ message: "Error in fetching products", error });
  }
};

const getAllProductById = async (req, res) => {
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
    res.status(500).json({ message: "Error in finding product by id:", error });
  }
};
const createProduct = async (req, res) => {
  const { name, price, imageUrls, category, stock, brand, description } =
    req.body;
  const owner = req.user._id;

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
    });

    res.status(201).json({ message: "new product is created", data: product });
  } catch (error) {
    res.status(500).json({ message: "Error in creating product", error });
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, price, imageUrls, category, stock, brand, description } =
    req.body;

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
};
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    res.status(200).json({
      message: "product deleted",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "error in delete product", error });
  }
};

export {
  getAllProduct,
  getAllProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
