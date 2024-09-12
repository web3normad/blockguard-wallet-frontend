import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { Navigate } from 'react-router-dom';

const CreatePassword = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle functions
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleCreateAWallet = () => {
    if (isChecked) {
      Navigate('/login'); 
    } else {
      alert('Please agree to the terms first.');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-8">
      {/* Row One */}
      <div className="text-center text-primary-400">
        <h1 className="text-xl mb-2">Create Password</h1>
        <p className="text-sm m-5">
          This password will unlock your Blockguard wallet only on this device. Blockguard cannot recover this password.
        </p>
      </div>

      {/* Row Two */}
      <div className="space-y-5">
        <div className="relative flex items-center w-[300px]">
          <input
            type={showPassword ? 'text' : 'password'}
            className="border-2 border-gray-300 bg-transparent rounded-full px-4 text-primary-400 text-sm p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="New Password (8 characters min)"
          />
          <div className="absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <IoEyeOffOutline className="text-white" /> : <IoEyeOutline className="text-white"/>}
          </div>
        </div>

        <div className="relative flex items-center w-[300px]">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="border-2 border-gray-300 bg-transparent rounded-full text-primary-400 px-4 text-sm p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm Password"
          />
          <div className="absolute right-3 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <IoEyeOffOutline className="text-white"/> : <IoEyeOutline className="text-white"/>}
          </div>
        </div>
      </div>

      {/* Row Three */}
      <div className="flex flex-col items-center space-y-5 mt-8">
        <div className="flex items-center space-x-1">
          <input type="checkbox" className="w-5 h-5 ml-5" />
          <p className="text-sm text-primary-400 p-6">
            I understand that Blockguard cannot recover this password for me. <span className="text-blue-500 underline">Learn more</span>
          </p>
        </div>
        <button className="bg-gradient-to-r from-primary-50 via-primary-200 to-primary-300 text-primary-400 w-[200px] py-2 rounded-full" onClick={handleCreateAWallet}>
          Create a new wallet
        </button>
        <p className="text-gray-500 underline cursor-pointer">I already have an account</p>
      </div>
    </div>
  );
};

export default CreatePassword;