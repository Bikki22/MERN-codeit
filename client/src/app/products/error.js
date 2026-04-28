"use client"

function Error({ statusCode }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-600 mb-6 ring-1 ring-red-100">
        <span className="text-2xl">!</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
        {statusCode ? `Error ${statusCode}` : "Something went wrong"}
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        We&apos;re sorry, something went wrong. Please try again later.
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;