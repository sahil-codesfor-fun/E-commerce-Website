import React from 'react';
import Button from '../ui/Button';
import graphic from '../../assets/graphic.png';
import backpack from '../../assets/backpack.png';
import hooded from '../../assets/hooded.png';
import shorts from '../../assets/shorts.png';
import kidskirt from '../../assets/skirtkid.png';
import polo from '../../assets/polo.png';

const KidsPage = ({ onBackClick, addToCart }) => {
  const productList = [
    { name: 'Graphic Tee', image: graphic, price: 900 },
    { name: 'Mini Backpack', image: backpack, price: 1200 },
    { name: 'Hooded Sweatshirt', image: hooded, price: 1500 },
    { name: 'Denim Shorts', image: shorts, price: 1500 },
    { name: 'Printed Skirt', image: kidskirt, price: 850 },
    { name: 'Stripe Polo', image: polo, price: 700 },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <button onClick={onBackClick} className="flex items-center pt-5 text-gray-600 hover:text-black transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <span className="text-md">Back to Collections</span>
      </button>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
        Kid's Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover mb-4" 
            />
            <h3 className="text-xl font-serif mb-1">{product.name}</h3>
            <p className="text-sm font-light text-gray-700">₹{product.price}</p>
            <Button onClick={() => addToCart(product)} className="mt-4">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsPage;