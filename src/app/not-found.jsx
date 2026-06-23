import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
      
      {/* card */}
      <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        
        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-gray-800 tracking-tight">
          404
        </h1>

        {/* title */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h2>

        {/* description */}
        <p className="mt-3 text-gray-500">
          The page you’re trying to reach doesn’t exist or has been moved.
        </p>

        {/* divider */}
        <div className="my-6 h-px bg-gray-200" />

        {/* button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}