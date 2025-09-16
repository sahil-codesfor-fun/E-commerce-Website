import React from 'react';
import Hero from '../sections/Hero';
import Collections from '../sections/Collections';
import About from '../sections/About';
import Footer from '../sections/Footer';

const Home = ({ onShopNowClick, onNavigate }) => {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <Collections onShopNowClick={onShopNowClick} />
      <About />
      <Footer />
    </main>
  );
};

export default Home;