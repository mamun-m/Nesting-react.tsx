/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Login from "./components/Login";
import Navbar from "./header/Navbar";
import Dashboard from "./assets/Dashboard";
import About1 from "./dist/About1";
import Section from "./dist/Section";
import ErrorPage from "./components/Error";
import Sign from "./dist/Sign";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/Dashboard",
            element: <Sign />,
          },
          {
            path: "section",
            element: <Section />,
          },
          {
            path: "about1",
            element: <About1 />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
