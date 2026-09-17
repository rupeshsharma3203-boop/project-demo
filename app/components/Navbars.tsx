"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons ke liye
import Appointment from "../Appointmentpage/Appointment";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
{/* Popup code */}
  const [showPopup, setShowPopup] = useState(false);
  {/* Popup code */}


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              MyLogo
            </Link>
          </div>

          {/* Desktop Navigation (Laptop aur badi screens ke liye) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition duration-200"
              >
                {link.name}
              </Link>
            ))}
           <button  onClick={() => setShowPopup(true)} className="bg-blue-300 hover:bg-blue-400 active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200 text-base py-2 px-3 text-white rounded-sm">Book Now Appoinment</button> 
          </div>





          {/* Mobile Menu Button (Sirf mobile view me dikhega) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Open hone par niche khulega) */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
              >
                {link.name}
              </Link>
            ))}


<button onClick={() => {
    setIsOpen(false);      // मोबाइल मेनू बंद करने के लिए
    setShowPopup(true);    // पॉपअप खोलने के लिए
  }} className="bg-blue-400 py-2 px-5 text-white rounded-lg ">Book Now Appoinment</button> 

          </div>
        </div>
      )}
    </nav>


{/* जब showPopup true होगा, तभी यह हिस्सा दिखेगा */}
{showPopup && (
  <div className="fixed inset-0 bg-black/80  flex justify-center items-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6">
      
      {/* पॉपअप बंद करने का बटन */}
      <button 
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
      >
        <X className="h-6 w-6" />
      </button>

      {/* आपका अपॉइंटमेंट फॉर्म यहाँ दिखेगा */}
      <div className="mt-4">
        <Appointment />
      </div>
      
    </div>
  </div>
)}


</>


  );
}
