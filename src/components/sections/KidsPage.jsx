import React from 'react';
import Button from '../ui/Button';

const KidsPage = ({ onBackClick }) => {
  const productList = [
    { name: 'Graphic Tee', image: 'https://images.unsplash.com/photo-1595180017163-1256338e5531?q=80&w=2574&auto=format&fit=crop', price: 30 },
    { name: 'Mini Backpack', image: 'https://images.unsplash.com/photo-1575440624855-40742d45e998?q=80&w=2574&auto=format&fit=crop', price: 45 },
    { name: 'Hooded Sweatshirt', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2592&auto=format&fit=crop', price: 55 },
    { name: 'Denim Shorts', image: 'https://images.unsplash.com/photo-1623596205739-1d428f52281c?q=80&w=2670&auto=format&fit=crop', price: 40 },
    { name: 'Printed Skirt', image: 'https://images.unsplash.com/photo-1610444605963-39d67503722e?q=80&w=2574&auto=format&fit=crop', price: 35 },
    { name: 'Stripe Polo', image: 'https://images.unsplash.com/photo-1607519639556-9d33a0b8058a?q=80&w=2574&auto=format&fit=crop', price: 38 },
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
            <p className="text-sm font-light text-gray-700">${product.price}</p>
            <Button className="mt-4">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsPage;