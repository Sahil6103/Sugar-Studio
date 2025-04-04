import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { Gallery } from "../pages/Gallery";
import { Global } from "../pages/Global";
import { City } from "../components/global/City";
import { PageNotFound } from "../components/common/PageNotFound";
// import { Project } from "../components/global/ProjectDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/global-projects" element={<Global />} />
          <Route path="/project/:cityId" element={<City />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
