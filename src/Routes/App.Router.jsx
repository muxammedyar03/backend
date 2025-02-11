import { useRoutes } from "react-router-dom";
import Clubs from "../pages/clubs";
import CreateOrder from "../Order/pages/createOrder";
import PlaceOrder from "../pages/placeOrder";
import OrdersDashboard from "../pages/OrdersDashboard";
import { Auth } from "../pages/Auth.tsx";
import Home from "../pages/Home/Home";

export default function AppRouter() {
  const router = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/auth", element: <Auth/>},
    { path: "/clubs/:id", element: <Clubs /> },
    { path: "/create/:id?", element: <CreateOrder /> }, 
    { path: "/place-order", element: <PlaceOrder /> },
    { path: "/dashboard", element: <OrdersDashboard /> },
  ]);
  return router;
}
