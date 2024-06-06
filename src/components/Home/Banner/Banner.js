import React from "react";
import "./Banner.css";
import banner from "../../../components/../images/logos/Frame.png";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="md:flex justify-between px-20 items-center py-36">
      <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
      <h1 className="text-5xl font-semibold">
            Let’s Grow Your Brand To The Next Level
          </h1>
          <p className="text-xl pl-2">
            Our comprehensive digital marketing services are designed to boost your online presence, drive traffic, and increase conversions. Partner with us to achieve your business goals.
          </p>
          <button 
            className="mt-8 rounded px-10 py-4 bg-primary text-white text-lg font-semibold"
            onClick={() => window.open("https://wa.me/9547128644?text=Hi%20Sir", "_blank")}
          >
            HIRE US
          </button>
        </div>
        <div className="banner-image flex-1">
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
