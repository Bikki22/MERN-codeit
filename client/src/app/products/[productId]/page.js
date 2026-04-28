import { getProductById } from "@/api/products";
import BackButton from "@/components/BackButton";
import AddToCart from "@/components/product/AddToCart";
import noImage from "@/assets/images/noImage.jpeg";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const ProductDetailPage = async ({ params }) => {
  const productId = (await params).productId;

  const response = await getProductById(productId);
  const product = response.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <BackButton />
      <div className="grid md:grid-cols-2 gap-10 items-start bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10">
        <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center">
          <Image
            src={product?.imageUrls?.[0] ?? noImage}
            width={800}
            height={800}
            alt={product?.name || "Product"}
            className="w-full h-full object-contain p-8"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {product?.brand && (
              <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                {product.brand}
              </span>
            )}
            {product?.category && (
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-slate-800 dark:text-slate-300">
                {product.category}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {product?.name}
          </h1>
          <div className="flex items-center gap-2 text-amber-400 text-sm">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <span className="text-slate-400 ml-1.5">(0 reviews)</span>
          </div>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              Rs. {product?.price}
            </span>
            <span className="line-through text-base text-slate-400">
              Rs. {Math.round((product?.price || 0) * 1.2)}
            </span>
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800">
              -20%
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {product?.description ||
              "Premium quality product, hand-picked for our store. Free shipping on orders over $50, 30-day returns, and a 1-year warranty."}
          </p>

          <div className="text-xs text-slate-400 font-mono">ID: {productId}</div>

          <div className="mt-3">
            <AddToCart product={product} />
          </div>

          <div className="mt-2 grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center">
              <p className="text-xs text-slate-500">Free shipping</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                $50+
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Returns</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                30 days
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Warranty</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                1 year
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
