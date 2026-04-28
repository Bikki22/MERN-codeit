import React from "react";
import Spinner from "./Spinner";

const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "w-full bg-primary hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative text-white font-semibold rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${className}`}
    >
      {loading && <Spinner className="w-4 h-4 text-white/30 fill-white" />}
      {label}
    </button>
  );
};

export default Button;
