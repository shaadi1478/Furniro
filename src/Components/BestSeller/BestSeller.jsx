import React from "react";
import best1 from "../../assets/best1.png";
import best2 from "../../assets/best2.png";
import { FaStar } from "react-icons/fa";

const BestSeller = () => {
  return (
    <section className="bg-[#CFA485] py-16 md:-mt-[65px] md:-mb-[65px]">
      <div className="max-w-[1366px] mx-auto grid md:grid-cols-3 gap-8  px-6">
        
        {/* Left Text Section */}
        <div className="text-white md:col-span-1">
          <h1 className="text-[64px] font-bold mb-6 leading-tight">
            Best Seller <br /> Product
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-white/90">
            Discover our top-selling fashion products loved by thousands of
            customers worldwide. Stylish, modern, and built with premium quality.
          </p>
          <button className="bg-black text-white px-[86px] py-[22px] font-semibold shadow hover:bg-gray-900 transition">
            Learn More
          </button>
        </div>

        {/* Right Product Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Product 1 */}
          <div className="relative group rounded-tr-[60px] rounded-tl-[60px] overflow-hidden shadow-lg bg-white">
            <img
              src={best1}
              alt="Leather Jacket"
              className="w-[300px] md:w-[349px] object-cover "
            />

            {/* Name + Rating Box */}
            <div className="w-full bg-white text-[#CFA485] text-center py-3">
              <h3 className="text-xl font-semibold">Leather Jacket</h3>
              <div className="flex justify-center items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="ml-2 text-sm text-gray-600">(4.9)</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative group rounded-tr-[60px] rounded-tl-[60px] overflow-hidden shadow-lg bg-white">
            <img
              src={best2}
              alt="Denim Jeans"
              className="w-[300px] md:w-[350px] object-cover "
            />

            {/* Name + Rating Box */}
            <div className="w-full bg-white text-[#CFA485] text-center py-3">
              <h3 className="text-xl font-semibold">Denim Jeans</h3>
              <div className="flex justify-center items-center mt-1">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="ml-2 text-sm text-gray-600">(4.7)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSeller;
