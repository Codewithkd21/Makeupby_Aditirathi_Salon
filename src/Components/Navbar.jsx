import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClasses = "relative px-2 py-1 font-medium after:block after:h-0.5 after:bg-pink-400 after:transition-all after:duration-300 after:scale-x-100 after:origin-left";

  const getLinkClasses = (isActive) =>
    `${baseClasses} ${isActive ? "text-black after:w-full" : "text-white hover:text-pink-300 after:w-0"}`;

  return (
    <nav className="backdrop-blur-md bg-amber-700/30 border-b border-black sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="text-amber-800 text-lg font-semibold tracking-widest">
          S A L O N
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)}>
            Home
          </NavLink>
          <NavLink to="/book" className={({ isActive }) => getLinkClasses(isActive)}>
            Book Online
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => getLinkClasses(isActive)}>
            Service Menu
          </NavLink>
          <NavLink to="/OurStory" className={({ isActive }) => getLinkClasses(isActive)}>
            Our Story
          </NavLink>
        </div>

        {/* Contact Button */}
        <div>
          <NavLink
  to="/contact"
  className="bg-transparent border  hover:bg-pink-300 hover:text-black text-white font-semibold px-5 py-2 rounded shadow transition"
>
  Contact Us
</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
