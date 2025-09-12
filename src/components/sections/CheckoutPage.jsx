import React, { useState, useRef, useEffect } from 'react';
import Button from '../ui/Button';

const CheckoutPage = ({ onBackClick, cartItems, onOrderPlaced, onContinueShopping }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const dialogRef = useRef(null); // Ref for the dialog box

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const isFormValid = formData.name && formData.email && formData.address && formData.city && formData.postalCode && formData.phone;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Order submitted:', { formData, cartItems });
      onOrderPlaced(formData);
      setIsOrderConfirmed(true);
    }
  };

  const handleContinueShopping = () => {
    setIsOrderConfirmed(false);
    onContinueShopping();
  };

  // Logic to close the dialog on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleContinueShopping();
      }
    };

    if (isOrderConfirmed) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOrderConfirmed, handleContinueShopping]);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <button onClick={onBackClick} className="flex items-center text-gray-600 hover:text-black transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <span className="text-sm">Back to Cart</span>
      </button>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
        Checkout
      </h2>

      <div className="max-w-xl mx-auto">
        <div className="bg-gray-50 p-6 sm:p-8 border border-gray-200">
          <h3 className="text-xl font-serif mb-4">Shipping Details</h3>
          <form onSubmit={handleOrderSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
            
            <h3 className="text-xl font-serif pt-6 mb-2">Payment Method</h3>
            <div className="border border-gray-300 p-4 bg-white">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="cod" checked readOnly className="w-4 h-4" />
                <span>Cash on Delivery</span>
              </label>
            </div>
            
            <div className="pt-4 flex justify-between font-bold">
              <span>Total:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <Button type="submit" disabled={!isFormValid} className={`w-full ${!isFormValid ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500' : ''}`}>
              Order Now
            </Button>
          </form>
        </div>
      </div>
      
      {/* Order Confirmation Modal */}
      {isOrderConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[60]">
          <div ref={dialogRef} className="bg-white p-10 text-center rounded-lg shadow-lg max-w-sm w-full animate-fadeInUp">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-500 mx-auto mb-4 animate-scaleIn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-3xl font-bold font-serif mb-2">Order Placed!</h3>
            <p className="text-gray-600 mb-6">Thank you for your order. A confirmation email has been sent to your inbox!</p>
            <Button onClick={handleContinueShopping}>
              Shop More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;