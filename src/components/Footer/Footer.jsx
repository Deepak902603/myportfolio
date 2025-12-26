import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Deepak Ranjan Rath
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base hover:text-purple-500 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-8 text-xl">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
            { icon: <FaInstagram />, link: "https://www.instagram.com" },
            { icon: <FaYoutube />, link: "https://www.youtube.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-8"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Deepak Ranjan Rath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

