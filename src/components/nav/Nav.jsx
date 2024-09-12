import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Navigation bar */}
      <div
        className="relative flex items-center justify-between bg-cover w-full pt-6 pl-6 pr-3"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-[18px] font-bold text-white">BRANDSMASHERS</h1>

        {/* Toggle icon for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation items */}
        <ul
          className={`lg:flex lg:space-x-6 lg:items-center lg:static lg:bg-transparent lg:w-auto lg:flex-row absolute top-0 left-0 lg:top-auto lg:left-auto lg:transform-none bg-white text-black transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:flex`}
          style={{ width: isOpen ? '33.333%' : 'auto', height: isOpen ? '100vh' : 'auto' }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="p-4 text-center border-b border-gray-800 lg:border-0 lg:p-0 lg:text-white text-black"
            >
              <Link
                to={item.path}
                className="text-black lg:text-white text-lg font-semibold hover:text-gray-600"
                onClick={() => setIsOpen(false)} // Close menu on item click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}

export default Nav;
