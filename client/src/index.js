import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import Menu from "./components/Menu";
import BetTips from "./components/BetTips";
import Tools from "./components/Tools";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import AboutVip from "./components/AboutVip";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
