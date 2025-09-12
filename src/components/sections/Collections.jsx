import React from 'react';
import Button from '../ui/Button';
import women from '../../assets/women.png';
import men from '../../assets/men.png';
import kids from '../../assets/kids.png'

const Collections = ({ onShopNowClick }) => {
  const collections = [
    {
      name: "Women's",
      image: women,
      page: 'womens'
    },
    {
      name: "Men's",
      image: men,
      page: 'mens'
    },
    {
      name: "Kid's",
      image: kids,
      page: 'kids'
    },
  ];

  return (
    <section id="collections" className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
        Explore Our Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden"
          >
            <img 
              src={collection.image} 
              alt={collection.name} 
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
            <div 
              className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-end p-6 text-white text-center"
            >
              <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
              <Button 
                onClick={() => onShopNowClick(collection.page)}
                className="border-white text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;