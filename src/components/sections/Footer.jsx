import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-center py-8 px-4">
      <p className="text-sm font-light text-gray-600">
        &copy; {new Date().getFullYear()} Fashion Hub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;