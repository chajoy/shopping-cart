import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import ItemPage from "./ItemPage";

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
        path: "cart",
        element: <Cart />,
      },
      {
        path: "item/:id",
        element: <ItemPage />,
      },
    ],
  },
]);

export default router;
