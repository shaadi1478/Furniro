import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Have questions or want to collaborate? Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl" />
            <span className="text-gray-700 text-lg">+880 1234 567 890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <span className="text-gray-700 text-lg">info@fashionbrand.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <span className="text-gray-700 text-lg">400 University Drive, Coral Gables, FL</span>
          </div>

          {/* Map */}
          <div className="mt-6 w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1234567890!2d-80.27189048498015!3d25.72065998363754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0c123456789%3A0x123456789abcdef!2s400%20University%20Drive%2C%20Coral%20Gables%2C%20FL!5e0!3m2!1sen!2sus!4v1696300000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form className="md:col-span-2 bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
