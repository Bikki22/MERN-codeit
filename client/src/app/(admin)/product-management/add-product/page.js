import AddProductForm from "@/components/admin/productManagement/AddProductForm";
import BackButton from "@/components/BackButton";
import React from "react";

const AddProductPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-3xl">
        <BackButton />
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Catalog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Add a new product
          </h2>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          <AddProductForm />
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;
