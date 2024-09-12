import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { FaStepBackward } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isLightMode, toggleTheme }) => {
  const location = useLocation();

  return (
    <div className={`flex items-center ${isLightMode ? 'bg-gray-100' : 'bg-primary-950'} px-7 py-2`}>
      {/* Backward Icon */}
      {location.pathname !== '/' && (
        <div className='flex flex-grow-0'>
          <Link to="/" className='text-primary-50'>
            <FaStepBackward />
          </Link>
        </div>
      )}

      {/* Spacer to push the buttons to the right */}
      <div className='flex-grow'></div>

      {/* Right Side Buttons */}
      <div className='flex items-center gap-4'>
        <IoNotifications className='text-primary-50 h-6 w-6' />
        <button onClick={toggleTheme} className="h-10 w-10 rounded-lg p-2">
          {!isLightMode ? (
            <svg className="fill-primary-50 block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg className="fill-yellow-500 block" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd" clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
