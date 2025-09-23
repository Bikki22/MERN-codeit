import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-8xl font-bold">
        4<span className="text-9xl text-red-500">0</span>4
      </h2>
      <h1 className="text-4xl font-bold">Page Not Found </h1>
      <Link href={HOME_ROUTE} className="mt-4  text-blue-500 hover:underline">
        Go Back To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
