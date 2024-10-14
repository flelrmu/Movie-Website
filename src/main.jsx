import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/home.jsx";
import SubscriptionsPage from "./Pages/subscriptions.jsx";
import SupportPage from "./Pages/support.jsx";
import MoviesPage from "./Pages/movies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
  {
    path: "/subscriptions",
    element: <SubscriptionsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
