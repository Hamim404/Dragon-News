import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //Creating new account
    createUser(email, password)
      .then(() => {
        alert("Account created successfully!");
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* form card */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white rounded-md shadow-sm px-8 md:px-16 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Register your account
          </h1>
          <hr className="my-8 border-gray-200" />

          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="block font-bold text-gray-800 mb-2">
                Your Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">
                Photo URL
              </label>
              <input
                required
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-2">
                Email
              </label>
              <input
                required
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
                required
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 px-4 py-4 rounded-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                required
                name="terms"
                type="checkbox"
                className="w-5 h-5"
              />
              <span className="text-gray-700">
                Accept <span className="font-bold">Term &amp; Conditions</span>
              </span>
            </div>
            {error && <p className="text-red-500">{error.code}</p>}
            <input
              type="submit"
              value="Submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-sm transition cursor-pointer"
            />
          </form>

          <p className="text-center font-semibold text-gray-800 mt-6">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-brand text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
