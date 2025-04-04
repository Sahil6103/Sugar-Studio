import React, { useEffect, useState, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { PreLoader } from "./components/common/PreLoader";
const LazyApp = React.lazy(() => import("./App"));

const AppWithPreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const waitForAssets = async () => {
      // Wait for images, fonts, and full page
      await Promise.all([
        new Promise((res) => {
          if (document.readyState === "complete") res();
          else window.addEventListener("load", res);
        }),
        document.fonts ? document.fonts.ready : Promise.resolve(),
      ]);
      setIsLoaded(true);
    };

    waitForAssets();
  }, []);

  return isLoaded ? (
    <Suspense fallback={null}>
      <LazyApp />
    </Suspense>
  ) : (
    <PreLoader />
  );
};

createRoot(document.getElementById("root")).render(<AppWithPreloader />);
