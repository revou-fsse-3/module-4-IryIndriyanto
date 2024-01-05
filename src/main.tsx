import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-day-picker/dist/style.css";
import Root from "./routes/root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./routes/login/LoginForm.tsx";
import Multistep from "./routes/multi-step-form/index.tsx";
import RegisterForm from "./routes/register/RegisterForm.tsx";
import CategoryTable from "./routes/category/CategoryTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <LoginForm />,
        index: true,
      },
      {
        path: "login",
        element: <LoginForm />,
        index: true,
      },
      {
        path: "multi-step-form",
        element: <Multistep />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "category",
        element: <CategoryTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
