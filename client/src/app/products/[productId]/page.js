import { getProductById } from "@/api/products";

const ProductDetailPage = async ({ params }) => {
  const productId = (await params).productId;

  const response = await getProductById(productId);
  const product = response.data;

  return (
    <div>
      <h1 className="text-4xl">ProductId: {productId}</h1>
      <ul>
        <li>Name: {product?.name}</li>
        <li>brand: {product?.brand}</li>
        <li>caetgory: {product?.category}</li>
        <li>description: {product?.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
