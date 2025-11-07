import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 py-10 px-6 md:px-20 ">
      <div className="max-w-[1366px] mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
        
        {/* 🔹 Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Funiro.</h2>
          <p className="text-sm leading-relaxed">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* 🔹 Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <Link to="/"><li className="hover:text-orange-500 cursor-pointer">Home</li></Link>
            <Link to="/shop"><li className="hover:text-orange-500 cursor-pointer">Shop</li></Link>
           <Link to="/about"> <li className="hover:text-orange-500 cursor-pointer">About</li></Link>
            <Link tp="contact"><li className="hover:text-orange-500 cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* 🔹 Help */}
        <div className="hidden md:block">
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
           <Link to=""> <li className="hover:text-orange-500 cursor-pointer">Payment Options</li></Link>
           <Link> <li className="hover:text-orange-500 cursor-pointer">Returns</li></Link>
           <Link> <li className="hover:text-orange-500 cursor-pointer">Privacy Policies</li></Link>
          </ul>
        </div>

        {/* 🔹 Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <div className="flex items-center border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <button className="text-orange-500 font-semibold hover:underline">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Copyright */}
      <div className="text-start text-sm text-gray-500 mt-10 border-t pt-4">
        © 2025 Funiro. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
