import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/Login.jsx";
import RegistForm from "./pages/Registrasi.jsx";
import ProductPage from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/registrasi",
    element: <RegistForm />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
