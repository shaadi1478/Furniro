import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const collections = [
  { img: image1, title: "Sweater" },
  { img: image2, title: "Jeans" },
  { img: image3, title: "Baskets" },
];

const Collection = () => {
  return (
    <section className="bg-white w-full py-20 px-6 md:px-12">
      <div className="max-w-[1366px] mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          New Collection
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom-centered Title */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <h2 className="text-2xl font-semibold bg-white text-gray-900 px-6 py-3 rounded-md inline-block shadow-md">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
