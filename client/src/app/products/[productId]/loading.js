import React from "react";

const LoadingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 animate-pulse">
        <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl" />
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
            <div className="h-5 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
          </div>
          <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-8 w-40 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded-md" />
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-700 rounded-xl mt-6" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
