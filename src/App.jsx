import React from "react";
import AppRoutes from "./routes/AppRoutes";
import SmoothScroll from "./components/common/SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll>
        <AppRoutes />
      </SmoothScroll>
    </>
  );
};

export default App;
