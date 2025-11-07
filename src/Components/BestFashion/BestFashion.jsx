import React from "react";
import fashionImg from "../../assets/fashion.png";

const BestFashion = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* Left Image Section */}
      <div className="relative w-full">
        <img
          src={fashionImg}
          alt="Fashion model"
          className="rounded-tl-[100px] shadow-lg w-full h-auto object-cover"
        />
        {/* Optional overlay decoration */}
        <div className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-yellow-300 rounded-full opacity-60 blur-lg"></div>
      </div>

      {/* Right Content Section */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Best Fashion <br /> Since 2010
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
          pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum
          non viverra.
        </p>

        {/* Stats Box */}
        <div className="bg-yellow-100 rounded-2xl py-6 px-4 sm:py-8 sm:px-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center shadow-md">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">2010</h3>
            <p className="text-gray-700 mt-2 font-medium text-sm sm:text-base">Founded</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">5000+</h3>
            <p className="text-gray-700 mt-2 font-medium text-sm sm:text-base">Product Sold</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">4500+</h3>
            <p className="text-gray-700 mt-2 font-medium text-sm sm:text-base">Best Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFashion;
