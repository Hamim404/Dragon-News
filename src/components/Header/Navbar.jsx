import { Link, NavLink } from "react-router";
import { UserCircle2 } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="hidden lg:block w-40" />

      <ul className="flex items-center gap-2 md:gap-4 text-base">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2 hover:text-brand transition ${isActive ? "text-brand font-medium" : "text-gray-600"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-2 hover:text-brand transition ${isActive ? "text-brand font-medium" : "text-gray-600"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className={({ isActive }) =>
              `px-2 hover:text-brand transition ${isActive ? "text-brand font-medium" : "text-gray-600"}`
            }
          >
            Career
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        {user && <p>{user.email}</p>}
        {user && user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <UserCircle2 className="w-9 h-9 text-gray-800" strokeWidth={1.5} />
        )}

        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2.5 rounded-sm transition cursor-pointer"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2.5 rounded-sm transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
