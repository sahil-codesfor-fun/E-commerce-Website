import React, { useRef, useEffect } from 'react';

const ProductAddedDialog = ({ isOpen, onClose, productName }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[70]">
      <div ref={dialogRef} className="bg-white p-8 text-center rounded-lg shadow-lg max-w-xs w-full animate-fadeInUp">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.4 5.4 0 018.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3A5.4 5.4 0 0124 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <h3 className="text-xl font-bold font-serif mb-2">{productName}</h3>
        <p className="text-gray-600">Added to Cart!</p>
      </div>
    </div>
  );
};

export default ProductAddedDialog;