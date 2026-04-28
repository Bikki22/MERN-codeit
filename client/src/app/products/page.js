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
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Catalog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            All products
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {products?.length ?? 0} items available
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SearchBar />
          <FilterButton brands={brands} categories={categories} />
        </div>
      </div>
      {products?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
            No products found
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
