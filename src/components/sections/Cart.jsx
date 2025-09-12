import React, { useRef, useEffect } from 'react';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeItem, onCheckoutClick }) => {
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
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

  if (!isOpen) {
    return null;
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex items-start justify-end">
      <div ref={cartRef} className="bg-white w-full max-w-sm h-full shadow-lg flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-2xl font-serif">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 flex-grow overflow-y-auto">
          {isCartEmpty ? (
            <p className="text-gray-500 italic">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-serif">{item.name}</h3>
                    <p className="text-sm text-gray-700">₹{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.name, -1)} 
                        className="px-2 py-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.name, 1)} 
                        className="px-2 py-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <button onClick={() => removeItem(item.name)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.93a2.25 2.25 0 01-2.244-2.077L4.772 5.667m10.147-3.21a2.25 2.25 0 00-2.244-2.077H8.93a2.25 2.25 0 00-2.244 2.077M19.5 5.25h-15" />
                      </svg>
                    </button>
                    <p className="text-sm font-semibold mt-2">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!isCartEmpty && (
          <div className="p-4 border-t">
            <div className="flex justify-between font-bold mb-4">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <button onClick={onCheckoutClick} className="w-full py-3 bg-black text-white font-light uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;