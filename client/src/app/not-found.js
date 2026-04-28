import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative">
        <h2 className="text-[180px] md:text-[220px] font-black tracking-tighter leading-none bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent select-none">
          404
        </h2>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white -mt-4">
        Page not found
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href={HOME_ROUTE}
        className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
