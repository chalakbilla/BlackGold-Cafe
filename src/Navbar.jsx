import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.4)] px-6 py-2 flex justify-between items-center z-50 shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="logo.png" // Replace with your logo path or URL
          alt="BlackGold Café Logo"
          className="h-10 w-10 object-contain"
        />
        <h1 className="text-xl font-semibold tracking-widest text-white">BlackGold Café</h1>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <a href="#our-coffees" className="text-white hover:text-gray-200 transition-colors">
            Our Coffees
          </a>
        </li>
        <li>
          <Link to="/OurCourses" className="text-white hover:text-gray-200 transition-colors">Our Courses</Link>

        </li>
        <li>
          <a href="#our-coffee" className="text-white hover:text-gray-200 transition-colors">
            Our Coffee
          </a>
        </li>
        <li>
          <Link to="/Tour" className="text-white hover:text-gray-200 transition-colors">
            Tour
          </Link>
        </li>
        {/* <li>
          <Link to="/Log" className="text-white hover:text-gray-200 transition-colors">
            Log
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;