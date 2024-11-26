import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contacts from "../../pages/Contacts/Contacts";
import Delivery from "../../pages/Delivery/Delivery";
import Cart from "../../pages/Cart/Cart";
import Profile from "../../pages/Profile/Profile";
import Wishlist from "../../pages/Wishlist/Wishlist";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/delivery", element: <Delivery /> },
  { path: "/cart", element: <Cart /> },
  { path: "/profile", element: <Profile /> },
  { path: "/wishlist", element: <Wishlist /> },
]);

export default router;
