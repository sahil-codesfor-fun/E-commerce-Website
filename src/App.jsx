import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import Cart from './components/sections/Cart';
import Collections from './components/sections/Collections';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';
import CheckoutPage from './components/sections/CheckoutPage';
import MyOrdersPage from './components/sections/MyOrdersPage';
import ProductAddedDialog from './components/ui/ProductAddedDialog';

// Product Data
import coat from './assets/trenchcoat.png';
import floral from './assets/floralmaxi.png';
import leather from './assets/leather.png';
import silk from './assets/silkblouse.png';
import knit from './assets/knit.png';
import skirt from './assets/skirt.png';

import graphic from './assets/graphic.png';
import backpack from './assets/backpack.png';
import hooded from './assets/hooded.png';
import shorts from './assets/shorts.png';
import kidskirt from './assets/skirtkid.png';
import polo from './assets/polo.png';

import blazer from './assets/blazer.png';
import denim from './assets/denim.png';
import wool from './assets/wool.png';
import shirt from './assets/shirt.png';
import boots from './assets/boots.png';
import sweater from './assets/sweater.png';

const AppContent = () => {
  const navigate = useNavigate();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState('');
  
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('orders');
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error("Failed to parse orders from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('orders', JSON.stringify(orders));
    } catch (error) {
      console.error("Failed to save orders to localStorage", error);
    }
  }, [orders]);

  useEffect(() => {
    let timer;
    if (isConfirmationVisible) {
      timer = setTimeout(() => {
        setIsConfirmationVisible(false);
      }, 1000); // Time changed to 1000ms
    }
    return () => clearTimeout(timer);
  }, [isConfirmationVisible]);


  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setLastAddedProduct(product.name);
    setIsConfirmationVisible(true);
  };

  const updateQuantity = (productName, change) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.name === productName ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      );
      return updatedItems.filter(item => item.quantity > 0);
    });
  };

  const removeItem = (productName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleOrderPlaced = (customerDetails) => {
    const newOrder = {
      orderId: Date.now(),
      items: cartItems,
      customer: customerDetails,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleDateString(),
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);
    setCartItems([]);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const deleteOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };

  const womensProducts = [
    { name: 'Classic Trench Coat', image: coat, price: 299 },
    { name: 'Floral Maxi Dress', image: floral, price: 150 },
    { name: 'Leather Satchel', image: leather, price: 220 },
    { name: 'Silk Blouse', image: silk, price: 95 },
    { name: 'Knit Sweater', image: knit, price: 80 },
    { name: 'Elegant Skirt', image: skirt, price: 110 },
  ];

  const mensProducts = [
    { name: 'Tailored Blazer', image: blazer, price: 350 },
    { name: 'Denim Jacket', image: denim, price: 180 },
    { name: 'Wool Trousers', image: wool, price: 120 },
    { name: 'Classic Oxford Shirt', image: shirt, price: 85 },
    { name: 'Leather Boots', image: boots, price: 250 },
    { name: 'Cashmere Sweater', image: sweater, price: 190 },
  ];

  const kidsProducts = [
    { name: 'Graphic Tee', image: graphic, price: 30 },
    { name: 'Mini Backpack', image: backpack, price: 45 },
    { name: 'Hooded Sweatshirt', image: hooded, price: 55 },
    { name: 'Denim Shorts', image: shorts, price: 40 },
    { name: 'Printed Skirt', image: kidskirt, price: 35 },
    { name: 'Stripe Polo', image: polo, price: 38 },
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="font-sans text-black">
      <Navbar
        onCartToggle={handleCartToggle}
        totalItems={totalItems}
      />
      <Routes>
        <Route path="/" element={<Home onShopNowClick={(pageName) => navigate(`/${pageName}`)} />} />
        <Route path="/womens" element={<ProductPage productList={womensProducts} title="Women's Collection" addToCart={addToCart} />} />
        <Route path="/mens" element={<ProductPage productList={mensProducts} title="Men's Collection" addToCart={addToCart} />} />
        <Route path="/kids" element={<ProductPage productList={kidsProducts} title="Kid's Collection" addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} onOrderPlaced={handleOrderPlaced} onContinueShopping={handleContinueShopping} />} />
        <Route path="/myorders" element={<MyOrdersPage orders={orders} deleteOrder={deleteOrder} />} />
      </Routes>
      <Cart
        isOpen={isCartOpen}
        onClose={handleCartToggle}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        onCheckoutClick={handleCheckoutClick}
      />
      <ProductAddedDialog 
        isOpen={isConfirmationVisible} 
        onClose={() => setIsConfirmationVisible(false)} 
        productName={lastAddedProduct} 
      />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;