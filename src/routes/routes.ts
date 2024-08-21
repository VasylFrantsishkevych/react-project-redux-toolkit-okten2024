import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>error</h1>,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
]);