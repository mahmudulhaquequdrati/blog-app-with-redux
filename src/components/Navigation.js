import React from "react";
import navImg from "../assets/lws.svg";

const Navigation = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="index.html">
          <img class="h-10" src={navImg} alt="Learn with Sumit" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
