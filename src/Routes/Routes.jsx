import { createBrowserRouter, Navigate } from "react-router";
import NewsDetails from "../pages/NewsDetails/NewsDetails.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import NewsFeed from "../components/NewsFeed/NewsFeed.jsx";
import HomeLayouts from "../layouts/HomeLayouts.jsx";
import CategoryNews from "../pages/CategoryNews/CategoryNews.jsx";
import { Suspense } from "react";
import AuthLayouts from "../layouts/AuthLayouts.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <NewsFeed />
          </Suspense>
        ),
      },
      {
        path: "category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews />,
      },
      {
        path: "news/:id",
        loader: () => fetch("/news.json"),
        element: <NewsDetails />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayouts />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
