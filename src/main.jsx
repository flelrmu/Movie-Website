import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext";
import HomePage from "./Pages/home.jsx";
import SubscriptionsPage from "./Pages/subscriptions.jsx";
import SupportPage from "./Pages/support.jsx";
import MoviesPage from "./Pages/movies.jsx";
import LoginPage from "./Pages/login.jsx";
import MoviesOpenPage from "./Pages/moviesOpen.jsx";
import ShowsOpenPage from "./Pages/showsOpen.jsx";
import ErrorPage from "./Pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  },
  {
    path: "/Movie-Website/",
    element: <HomePage />,
  },
  {
    path: "/Movie-Website/home",
    element: <HomePage />,
  },
  {
    path: "/Movie-Website/movies",
    element: <MoviesPage />,
  },
  {
    path: "/Movie-Website/support",
    element: <SupportPage />,
  },
  {
    path: "/Movie-Website/subscriptions",
    element: <SubscriptionsPage />,
  },
  {
    path: "/Movie-Website/login",
    element: <LoginPage />,
  },
  {
    path: "/Movie-Website/moviesOpen",
    element: <MoviesOpenPage />,
  },
  {
    path: "/Movie-Website/showsOpen",
    element: <ShowsOpenPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} basePath="/Movie-Website/" />
    </UserProvider>
  </StrictMode>
);
