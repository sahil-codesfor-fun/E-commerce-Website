import React from 'react';
import Button from '../ui/Button';
import coat from '../../assets/trenchcoat.png'
import floral from '../../assets/floralmaxi.png'
import leather from '../../assets/leather.png'
import silk from '../../assets/silkblouse.png'
import knit from '../../assets/knit.png'
import skirt from '../../assets/skirt.png'

const WomensPage = ({ onBackClick }) => {
  const productList = [
    { name: 'Classic Trench Coat', image: coat, price: 299 },
    { name: 'Floral Maxi Dress', image: floral, price: 150 },
    { name: 'Leather Satchel', image: leather, price: 220 },
    { name: 'Silk Blouse', image: silk, price: 95 },
    { name: 'Knit Sweater', image: knit, price: 80 },
    { name: 'Elegant Skirt', image: skirt, price: 110 },
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
        Women's Collection
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
            <p className="text-sm font-light text-gray-700">${product.price}</p>
            <Button className="mt-4">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomensPage;