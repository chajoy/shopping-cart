import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Shop from "./Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
