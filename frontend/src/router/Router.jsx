import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Layout from "../layout/Layout";
import NotFound from "../components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
