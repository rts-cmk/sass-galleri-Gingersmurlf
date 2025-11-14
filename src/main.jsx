import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Food from "./components/food"
import Lifestyle from "./components/lifestyle"
import Home from "./components/home"
import Travel from "./components/travel"

import "./scss/main.scss"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/food" element={<Food />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
