import { apiClient } from "./apiClient";

async function getProducts() {
  try {
    return await apiClient.customFetch("/products");
  } catch (error) {
    console.log("failed to fetch products:", error);
  }
}

async function getProductById(id) {
  try {
    return await apiClient.customFetch(`/products/${id}`);
  } catch (error) {
    console.log(`failed to fetch product by id, ${error}`);
    return null;
  }
}

export { getProducts, getProductById };
