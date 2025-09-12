import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 tracking-widest text-sm font-light uppercase border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;