import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Centered Content Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="flex mb-4">
            <p className="text-5xl font-semibold text-red-600 mr-2">@H</p>
            <p className="text-5xl font-semibold text-white">K</p>
          </div>

          {/* Icons Section */}
          <div className="flex space-x-4">
            <Icons />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Harshita Katariya. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
