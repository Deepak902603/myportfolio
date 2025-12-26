import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -64;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-lg font-semibold select-none cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          Deepak<span className="text-[#8245ec]">/</span>RanjanRath
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`hover:text-[#8245ec] transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-[#8245ec]">
            <FaGithub size={22} />
          </a>
          <a href="#" className="hover:text-[#8245ec]">
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#050414]/95 backdrop-blur-lg z-[90] md:hidden">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-lg hover:text-[#8245ec] ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
