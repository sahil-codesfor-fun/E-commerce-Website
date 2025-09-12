import React from 'react';
import luxury from '../../assets/luxury.png'

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={luxury}
            alt="About Fashion Hub"
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Luxury in Every Thread
          </h2>
          <p className="text-lg font-light leading-relaxed">
            At Fashion Hub, we believe in the power of timeless design. Each piece in our collection is meticulously crafted with the finest materials, ensuring a legacy of grace and quality. Our commitment is to sustainable luxury, creating garments that are not just worn, but cherished for a lifetime. We are the guardians of elegance, the purveyors of lasting style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;