import { getBrands, getCategories, getProducts } from "@/api/products";
import FilterButton from "@/components/product/FilterButton";
import ProductCard from "@/components/product/ProductCard";
import SearchBar from "@/components/product/SearchBar";

const ProductPage = async () => {
  const response = await getProducts();
  const brandResponse = await getBrands();
  const categoryResponse = await getCategories();

  const products = response.data;
  const brands = brandResponse.data;
  const categories = categoryResponse.data;

  return (
    <div className="max-w-screen-xl mx-auto py-5 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium dark:text-white">Products</h2>
        <div className="flex items-center space-x-4 gap-4">
          <SearchBar />
          <FilterButton brands={brands} categories={categories} />
        </div>
      </div>
      {products?.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-10">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <p className="text-center py-10  text-lg text-red-500 w-full">
          No products found! Please try different keywords.
        </p>
      )}
    </div>
  );
};

export default ProductPage;
