import Skeleton from "@/components/product/Skeleton";
import * as React from "react";

const LoadingProduct = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse mb-3" />
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default LoadingProduct;
