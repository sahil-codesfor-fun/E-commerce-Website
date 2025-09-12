import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';

const Navbar = ({ onCartToggle, onNavigate }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchVisible) setIsSearchVisible(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <div className="text-xl md:text-2xl lg:text-3xl font-serif font-bold tracking-widest cursor-pointer" onClick={() => onNavigate('home')}>
          Fashion Hub
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-12">
          <div className="hidden lg:flex space-x-10 text-sm font-light uppercase tracking-widest">
            <a href="#collections" className="hover:underline underline-offset-4">Shop All</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#footer" className="hover:underline underline-offset-4">Contact</a>
          </div>
          
          <button onClick={handleSearchToggle} aria-label="Toggle Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          
          <button aria-label="Shopping Cart" onClick={onCartToggle}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000000"><path fill="#000000" d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z"/></svg>
          </button>
          
          <button className="lg:hidden" onClick={handleMenuToggle} aria-label="Toggle Mobile Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`mt-2 ${isSearchVisible ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4">
          <SearchBar />
        </div>
      </div>

      <div className={`mt-2 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4 text-sm font-light uppercase tracking-widest bg-white">
          <a href="#collections" className="hover:underline underline-offset-4">Shop All</a>
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#footer" className="hover:underline underline-offset-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;