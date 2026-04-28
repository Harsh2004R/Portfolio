import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../mycomponents/Home.jsx";
import Admin from "../mycomponents/Admin.jsx";
import Work from "../mycomponents/Work.jsx";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AllRoutes;
