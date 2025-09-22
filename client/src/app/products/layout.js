import React from "react";

export const metadata = {
  title: "Product",
  description: "Best Online products",
};

const ProductLayout = ({ children }) => {
  return <div className="py-5 bg-slate-100">{children}</div>;
};

export default ProductLayout;
