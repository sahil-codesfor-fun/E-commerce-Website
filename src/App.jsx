import React, { useState, useEffect } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Collections from './components/sections/Collections';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import Cart from './components/sections/Cart';
import WomensPage from './components/sections/WomensPage';
import MensPage from './components/sections/MensPage';
import KidsPage from './components/sections/KidsPage';
import CheckoutPage from './components/sections/CheckoutPage';
import MyOrdersPage from './components/sections/MyOrdersPage';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  
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

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleShopNowClick = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    setCurrentPage('checkout');
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
    setCurrentPage('home');
  };
  
  const deleteOrder = (orderId) => {
    // The confirmation dialog will handle the check
    setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };

  // Navigation functions
  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
  };

  const navigateToSection = (sectionId) => {
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main>
            <Hero />
            <Collections onShopNowClick={handleShopNowClick} />
            <About />
            <Footer />
          </main>
        );
      case 'womens':
        return <WomensPage onBackClick={() => setCurrentPage('home')} addToCart={addToCart} />;
      case 'mens':
        return <MensPage onBackClick={() => setCurrentPage('home')} addToCart={addToCart} />;
      case 'kids':
        return <KidsPage onBackClick={() => setCurrentPage('home')} addToCart={addToCart} />;
      case 'checkout':
        return <CheckoutPage onBackClick={handleCheckoutClick} cartItems={cartItems} onOrderPlaced={handleOrderPlaced} onContinueShopping={handleContinueShopping} />;
      case 'myorders':
        return <MyOrdersPage onBackClick={() => setCurrentPage('home')} orders={orders} deleteOrder={deleteOrder} />;
      default:
        return (
          <main>
            <Hero />
            <Collections onShopNowClick={handleShopNowClick} />
            <About />
            <Footer />
          </main>
        );
    }
  };

  return (
    <div className="font-sans text-black">
      <Navbar 
        onCartToggle={handleCartToggle} 
        navigateToPage={navigateToPage}
        navigateToSection={navigateToSection}
        totalItems={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
      />
      {renderPage()}
      <Cart 
        isOpen={isCartOpen} 
        onClose={handleCartToggle} 
        cartItems={cartItems} 
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        onCheckoutClick={handleCheckoutClick}
      />
    </div>
  );
};

export default App;