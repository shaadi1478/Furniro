import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";

const products = [
  { id: 1, name: "Leather Jacket", price: "$120", rating: 5, image: product1 },
  { id: 2, name: "Denim Jeans", price: "$80", rating: 4, image: product2 },
  { id: 2, name: "Denim Jeans", price: "$80", rating: 4, image: product2 },
  { id: 3, name: "Summer Dress", price: "$60", rating: 4, image: product3 },
  { id: 3, name: "Summer Dress", price: "$60", rating: 4, image: product3 },
  { id: 4, name: "Sneakers", price: "$90", rating: 5, image: product4 },
  { id: 4, name: "Sneakers", price: "$90", rating: 5, image: product4 },
];

const Shop = () => {
  const [showCard, setShowCard] = useState(4)

  const displayProduct = products.slice(0, showCard)
  const showAll = showCard >= products.length;


  const handleShowAllCard = () => {
    if(showAll){
      setShowCard(4)
    }
    else{
      setShowCard(products.length)
    }
  }
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our Shop
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Browse our latest collection of high-quality fashion products.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayProduct.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center"
          >
            {/* Product Image */}
            <div className="relative w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="text-center mt-4 w-full">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>

              {/* Rating */}
              <div className="flex justify-center items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div >
        <button onClick={handleShowAllCard} className="block mx-auto mt-6 btn-primary bg-yellow-500 px-3 py-1.5 text-white font-semibold rounded cursor-pointer ">
          {showAll ? "show less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Shop;
