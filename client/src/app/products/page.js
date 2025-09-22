import { getProducts } from "@/api/products";
import ProductCard from "@/components/product/ProductCard";

const ProductPage = async () => {
  const response = await getProducts();

  const products = response.data;

  return (
    <div className="max-w-screen-xl mx-auto py-5 px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-10">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
