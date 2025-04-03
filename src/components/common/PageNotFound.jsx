import React from "react";
import { LineArt } from "./LineArt";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="px-3 md:px-10 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <LineArt />
        <div className="content text-center flex flex-col justify-center items-center gap-3 w-full md:w-2/3">
          <span className="font-heading text-xl md:text-2xl">OOOPS...</span>
          <span className="font-heading text-4xl md:text-5xl">
            Page Not Found
          </span>
          <p className="font-paragraph md:text-lg">
            The page you’re looking for isn’t available.
          </p>
          <Link
            to="/"
            className="group relative font-heading px-8 py-2 mt-5 bg-light-gray text-black overflow-hidden 
             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
             before:bg-black before:transition-all before:duration-700 before:[clip-path:circle(0%_at_50%_50%)] 
             hover:before:[clip-path:circle(150%_at_50%_50%)] before:z-0">
            <span className="relative z-10 group-hover:text-white transition-all duration-700">
              Go to Home Page
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
