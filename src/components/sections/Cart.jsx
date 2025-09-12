import React from 'react';

const Cart = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex items-start justify-end">
      <div className="bg-white w-full max-w-sm h-full shadow-lg flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-2xl font-serif">Your Cart</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-gray-500 italic">Your cart is empty.</p>
        </div>
        <div className="p-4 border-t">
          <button className="w-full py-3 bg-black text-white font-light uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;