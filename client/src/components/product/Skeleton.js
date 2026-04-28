import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-slate-100 dark:bg-slate-800" />
      <div className="px-5 py-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
        </div>
        <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-md" />
        <div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded-md" />
        <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded-md" />
      </div>
      <div className="px-5 pb-5">
        <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded-xl" />
      </div>
    </div>
  );
};

export default Skeleton;
