import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-day-picker/dist/style.css";
import Root from "./routes/root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
