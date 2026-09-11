import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const [error, setError]= useState(null);
  let navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        alert("Successfully Logged In");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error)
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* form card */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white rounded-md shadow-sm px-8 md:px-16 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Login your account
          </h1>
          <hr className="my-8 border-gray-200" />

          <form onSubmit={handleLogIn} className="space-y-6">
            <div>
              <label className="block font-bold text-gray-800 mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            {error && <p className="text-red-500">{error.code}</p>}
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-sm transition"
            >
              Login
            </button>
          </form>

          <p className="text-center font-semibold text-gray-800 mt-6">
            Dont&apos;t Have An Account ?{" "}
            <Link to="/auth/register" className="text-brand text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
