import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <p className="text-center">
          Made with Love © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
