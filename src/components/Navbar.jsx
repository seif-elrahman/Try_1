import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Assuming react-icons is installed, checking package.json... yes it is.

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="!text-white !no-underline text-2xl font-bold tracking-wide hover:text-gray-300">
          Sword
        </Link>
        
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">To Do App</NavLink>
          <NavLink to="/products">Product</NavLink>
          <NavLink to="/profile">Profile Card</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/todo" onClick={toggleMenu}>To Do App</NavLink>
          <NavLink to="/products" onClick={toggleMenu}>Product</NavLink>
          <NavLink to="/profile" onClick={toggleMenu}>Profile Card</NavLink>
        </div>
      )}
    </nav>
  );
};


const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="!text-white !no-underline hover:text-gray-300 transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);
