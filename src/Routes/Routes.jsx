import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import NewsDetails from "../pages/NewsDetails/NewsDetails.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => fetch("categories.json"),
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <h1>Details</h1>,
      },
      {
        path: "news/:id",
        element: <NewsDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
