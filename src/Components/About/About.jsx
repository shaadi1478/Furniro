import React from "react";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.webp";
import feature3 from "../../assets/feature3.jpg";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          About Our Fashion Brand
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          We provide the best quality fashion products with modern designs. 
          Our commitment is to style, comfort, and customer satisfaction.
        </p>
      </div>

      {/* Features / Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-yellow-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition">
          <img src={feature1} alt="Quality Products" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p className="text-gray-700">
            Our products are made with premium materials for durability and comfort.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-yellow-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition">
          <img src={feature2} alt="Modern Design" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
          <p className="text-gray-700">
            We follow the latest fashion trends to keep your style up-to-date.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-yellow-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition">
          <img src={feature3} alt="Customer Support" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p className="text-gray-700">
            We provide excellent customer service to ensure your satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
