import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

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
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
