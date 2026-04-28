import React from "react";

export const metadata = {
  title: "Product",
  description: "Best Online products",
};

const ProductLayout = ({ children }) => {
  return <div className="bg-background min-h-screen">{children}</div>;
};

export default ProductLayout;
