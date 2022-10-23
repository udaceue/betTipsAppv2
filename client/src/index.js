import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Menu from "./components/MenuBar";
import BetTips from "./components/BetTips";
import Tools from "./pages/Tools";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AboutVip from "./pages/AboutVip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path="BetTips" element={<BetTips />} />
      <Route path="Tools" element={<Tools />} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="AboutVip" element={<AboutVip />} />
    </Routes>
  </BrowserRouter>
);
