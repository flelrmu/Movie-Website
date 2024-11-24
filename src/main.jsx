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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} basePath="/Movie-Website/"/>
  </StrictMode>
);
