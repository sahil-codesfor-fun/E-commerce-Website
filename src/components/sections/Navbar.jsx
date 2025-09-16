import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const Navbar = ({ onCartToggle, totalItems }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchVisible) setIsSearchVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-serif font-bold tracking-widest cursor-pointer">
          Fashion Hub
        </Link>
        
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-12">
          <div className="hidden lg:flex space-x-10 text-sm font-light uppercase tracking-widest">
            <a href="/#collections" className="hover:underline underline-offset-4">Shop All</a>
            <a href="/#about" className="hover:underline underline-offset-4">About</a>
            <Link to="/myorders" className="hover:underline underline-offset-4">My Orders</Link>
          </div>
          
          <div ref={searchRef} className="flex items-center">
            <button onClick={handleSearchToggle} aria-label="Toggle Search" className="hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            {isSearchVisible && (
              <div className="hidden lg:block ml-4">
                <SearchBar />
              </div>
            )}
          </div>
          
          <div className="relative">
            <button aria-label="Shopping Cart" onClick={onCartToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z"/></svg>
            </button>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs font-semibold">
                {totalItems}
              </span>
            )}
          </div>
          
          <button className="lg:hidden" onClick={handleMenuToggle} aria-label="Toggle Mobile Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mt-2 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4 text-sm font-light uppercase tracking-widest bg-white">
          <a href="/#collections" className="hover:underline underline-offset-4">Shop All</a>
          <a href="/#about" className="hover:underline underline-offset-4">About</a>
          <Link to="/myorders" className="hover:underline underline-offset-4">My Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;