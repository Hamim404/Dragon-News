import { Link, NavLink } from "react-router"
import { UserCircle2 } from "lucide-react"

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
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
    </>
  )

  return (
    <nav className="flex items-center justify-between py-4">
      {/* left spacer for balance on large screens */}
      <div className="hidden lg:block w-40" />

      {/* center nav */}
      <ul className="flex items-center gap-2 md:gap-4 text-base">{navItems}</ul>

      {/* right auth */}
      <div className="flex items-center gap-3">
        <UserCircle2 className="w-9 h-9 text-gray-800" strokeWidth={1.5} />
        <Link
          to="/login"
          className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2.5 rounded-sm transition"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
