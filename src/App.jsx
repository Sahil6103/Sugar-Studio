import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import SmoothScroll from "./components/common/SmoothScroll";

export const App = () => {
  return (
    <>
      <SmoothScroll>
        <AppRoutes />
      </SmoothScroll>
    </>
  );
};
