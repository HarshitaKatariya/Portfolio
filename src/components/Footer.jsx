
import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Logo and Icons Section */}
        <div className="flex flex-col items-center justify-center mb-6">
          {/* Logo Section */}
          <div className="flex items-center mb-4">
            <p className="text-5xl sm:text-6xl font-semibold text-red-600 mr-2">@H</p>
            <p className="text-5xl sm:text-6xl font-semibold text-white">K</p>
          </div>

          {/* Icons Section */}
          <div className="flex space-x-6 mt-4">
            <Icons />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Harshita Katariya. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

