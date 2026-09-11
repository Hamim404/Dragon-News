import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="font-newspaper text-8xl font-black text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 bg-brand text-white bg-pink-600 font-semibold px-8 py-3 rounded-sm hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
