import QZone from "../QZone/QZone.jsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Login With */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Login With</h3>
        <div className="space-y-3">
          <button className="w-full border border-blue-400 text-blue-500 font-medium py-2.5 rounded-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition">
            <span className="font-bold">G</span> Login with Google
          </button>
          <button className="w-full border border-gray-300 text-gray-700 font-medium py-2.5 rounded-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <span className="font-bold"></span> Login with Github
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us On</h3>
        <div className="border border-gray-200 rounded-sm divide-y divide-gray-200">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
          >
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-700">Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
          >
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <span className="font-medium text-gray-700">Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition"
          >
            <FaInstagram className="w-6 h-6 text-pink-500" />
            <span className="font-medium text-gray-700">Instagram</span>
          </a>
        </div>
      </div>

      {/* Q-Zone */}
      <QZone />

      {/* Decorative promo block from the layout */}
      <div className="h-96 rounded-sm bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
    </aside>
  );
};

export default RightSidebar;
