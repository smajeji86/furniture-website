import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartInvoice from "../components/Screens/Cart Invoice";
import HomeScreen from "../components/Screens/Home Screen";
import LandingScreen from "../components/Screens/Landing Screen";
import StoreCartScreen from "../components/Screens/StoreCart Screen";
import history from "./history.js";

export default function Routers() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cart" element={<StoreCartScreen />} />
        <Route path="/cart-invoice" element={<CartInvoice />} />
      </Routes>
    </Router>
  );
}
