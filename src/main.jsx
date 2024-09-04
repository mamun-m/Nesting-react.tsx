// import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/products";
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar";
import SingIn from "./pages/SingIn";
import ProductDetails from "./pages/ProductDetails";
import UserProfile from "./components/User/UserProfile";
import UserOrder from "./components/User/UserOrder";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminCatagories from "./components/Admin/AdminCatagories";
import AdminManageUser from "./components/Admin/AdminManageUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signOut",
        element: <SingIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard/user",
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "orders",
            element: <UserOrder />,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "catagories",
            element: <AdminCatagories />,
          },
          {
            path: "manageres",
            element: <AdminManageUser />,
          },
        ],
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
