import React from 'react';
import Button from '../ui/Button';
import hero from '../../assets/hero.png'

const Hero = () => {
  const handleShopClick = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-4 tracking-wider">
          A Collection of Timeless Grace
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto">
          Elevate your style with pieces that transcend seasons and trends.
        </p>
        <Button onClick={handleShopClick} className="border-white text-white hover:bg-black hover:text-white">
          Shop the Collections
        </Button>
      </div>
    </header>
  );
};

export default Hero;