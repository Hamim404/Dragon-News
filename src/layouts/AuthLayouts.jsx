import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default AuthLayouts;
