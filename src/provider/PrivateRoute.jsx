import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router";

const PrivateRoute = () => {
  const { user } = use(AuthContext);
  let navigate = useNavigate();
  if (user) {
    
  } else {
    return navigate("/auth/login");
  }
  return <div></div>;
};

export default PrivateRoute;
