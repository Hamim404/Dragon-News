import { Link, NavLink } from "react-router"
import { UserCircle2 } from "lucide-react"

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* auth nav */}
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
        <ul className="flex items-center gap-4 text-base">
          <li>
            <NavLink to="/" className="text-gray-800 hover:text-brand">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-600 hover:text-brand">About</NavLink>
          </li>
          <li>
            <NavLink to="/career" className="text-gray-600 hover:text-brand">Career</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <UserCircle2 className="w-9 h-9 text-gray-800" strokeWidth={1.5} />
          <Link
            to="/login"
            className="bg-gray-800 text-white font-medium px-6 py-2.5 rounded-sm"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* form card */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white rounded-md shadow-sm px-8 md:px-16 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Register your account
          </h1>
          <hr className="my-8 border-gray-200" />

          <form className="space-y-6">
            <div>
              <label className="block font-bold text-gray-800 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">Photo URL</label>
              <input
                type="text"
                placeholder="Enter your photo url"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">
                Accept <span className="font-bold">Term &amp; Conditions</span>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-sm transition"
            >
              Register
            </button>
          </form>

          <p className="text-center font-semibold text-gray-800 mt-6">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-brand">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
