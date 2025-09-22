import Skeleton from "@/components/product/Skeleton";
import * as React from "react";

const LoadingProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-10">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default LoadingProduct;
