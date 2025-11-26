import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      {/* bg-gray-50 border border-gray-200 rounded-2xl shadow-sm  */}
      <div className="p-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          Sorry, the product you're looking for doesn't exist or has been
          removed.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
