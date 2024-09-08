import React, { useState } from 'react';
import { FaClock, FaExchangeAlt, FaChartBar, FaUser } from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState('card');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const isActive = (iconName) => activeIcon === iconName;

  return (
    <div className="fixed bottom-0 left-0 right-0 w-[350px] h-20 bg-primary-800 rounded-t-2xl flex justify-around items-center px-4">
      {/* Left Icons */}
      <div className="relative flex justify-center items-center">
        <div
          className={`absolute ${isActive('clock') ? '-translate-y-8 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}
        >
          <div className={`p-3 rounded-full flex justify-center items-center ${isActive('clock') ? 'bg-primary-950' : ''}`}>
            <FaClock
              className={`text-2xl ${isActive('clock') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => handleIconClick('clock')}
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div
          className={`absolute ${isActive('exchange') ? '-translate-y-8 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}
        >
          <div className={`p-3 rounded-full flex justify-center items-center ${isActive('exchange') ? 'bg-primary-950' : ''}`}>
            <FaExchangeAlt
              className={`text-2xl ${isActive('exchange') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => handleIconClick('exchange')}
            />
          </div>
        </div>
      </div>

      {/* Center Icon */}
      <div className="relative flex justify-center items-center">
        <div
          className={`absolute ${isActive('card') ? '-translate-y-8 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}
        >
          <div className={`p-3 rounded-full flex justify-center items-center ${isActive('card') ? 'bg-primary-950' : ''}`}>
            <IoMdCard
              className={`text-2xl ${isActive('card') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => handleIconClick('card')}
            />
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <div className="relative flex justify-center items-center">
        <div
          className={`absolute ${isActive('chart') ? '-translate-y-8 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}
        >
          <div className={`p-3 rounded-full flex justify-center items-center ${isActive('chart') ? 'bg-primary-950' : ''}`}>
            <FaChartBar
              className={`text-2xl ${isActive('chart') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => handleIconClick('chart')}
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div
          className={`absolute ${isActive('user') ? '-translate-y-8 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full' : 'translate-y-0'} transition-transform duration-300 ease-in-out`}
        >
          <div className={`p-3 rounded-full flex justify-center items-center ${isActive('user') ? 'bg-primary-950' : ''}`}>
            <FaUser
              className={`text-2xl ${isActive('user') ? 'text-white' : 'text-gray-300'}`}
              onClick={() => handleIconClick('user')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
