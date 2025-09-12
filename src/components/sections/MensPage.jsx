import React from 'react';
import Button from '../ui/Button';

const MensPage = ({ onBackClick }) => {
  const productList = [
    { name: 'Tailored Blazer', image: 'https://images.unsplash.com/photo-1543728069-42861c0d4567?q=80&w=2670&auto=format&fit=crop', price: 350 },
    { name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1541018281137-0ed38d4c9d57?q=80&w=2574&auto=format&fit=crop', price: 180 },
    { name: 'Wool Trousers', image: 'https://images.unsplash.com/photo-1620950669287-2a4069e2c65a?q=80&w=2574&auto=format&fit=crop', price: 120 },
    { name: 'Classic Oxford Shirt', image: 'https://images.unsplash.com/photo-1520624021798-250917637841?q=80&w=2670&auto=format&fit=crop', price: 85 },
    { name: 'Leather Boots', image: 'https://images.unsplash.com/photo-1579979708688-299f1165c71b?q=80&w=2670&auto=format&fit=crop', price: 250 },
    { name: 'Cashmere Sweater', image: 'https://images.unsplash.com/photo-1614741334054-c9f2b87d55f0?q=80&w=2574&auto=format&fit=crop', price: 190 },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <button onClick={onBackClick} className="flex items-center text-gray-600 hover:text-black transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <span className="text-sm">Back to Collections</span>
      </button>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
        Men's Collection
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

export default MensPage;