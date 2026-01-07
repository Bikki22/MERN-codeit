import AddProductForm from "@/components/admin/productManagement/AddProductForm";
import BackButton from "@/components/BackButton";
import React from "react";

const AddProductPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-10">
        <BackButton />
      </div>
      <div className="px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <AddProductForm />
      </div>
    </section>
  );
};

export default AddProductPage;
