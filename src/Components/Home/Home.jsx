import React from "react";
import banner from "../../assets/banner.png";
import Collection from "../Collection/Collection";
import BestFashion from "../BestFashion/BestFashion";
import BestSeller from "../BestSeller/BestSeller";

const Home = () => {
  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <section className="w-full bg-[#FAE3B6] flex items-center py-2 md:py-16 px-8 md:px-16 ">
        <div className="max-w-[1366px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
          
          {/* 🔹 Left Text Section */}
          <div className="space-y-6">
            <h1 className="text-[42px] md:text-[70px] font-bold leading-tight text-gray-900 max-w-[550px]">
              Find The Best Fashion Style For You.
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
              pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.
            </p>
            <button
              aria-label="Shop Now"
              className="bg-black text-white font-medium py-3 px-10 md:py-[20px] md:px-[80px] rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              SHOP NOW
            </button>
          </div>

          {/* 🔹 Right Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Fashion banner"
              className="w-full max-w-md md:max-w-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* 🔹 Collection Section */}
      <Collection />
      <BestFashion />
      <BestSeller />
    </div>
  );
};

export default Home;
