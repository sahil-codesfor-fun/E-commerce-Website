import React, { useState } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Collections from './components/sections/Collections';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import Cart from './components/sections/Cart';
import WomensPage from './components/sections/WomensPage'; 
import MensPage from './components/sections/MensPage';     
import KidsPage from './components/sections/KidsPage';     

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleShopNowClick = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return <WomensPage onBackClick={() => setCurrentPage('home')} />;
      case 'mens':
        return <MensPage onBackClick={() => setCurrentPage('home')} />;
      case 'kids':
        return <KidsPage onBackClick={() => setCurrentPage('home')} />;
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
      <Navbar onCartToggle={handleCartToggle} onNavigate={setCurrentPage} />
      {renderPage()}
      <Cart isOpen={isCartOpen} onClose={handleCartToggle} />
    </div>
  );
};

export default App;