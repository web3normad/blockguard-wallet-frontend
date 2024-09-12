import React from 'react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-[#12122A] flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="mb-6">
          <img src="/assets/images/blockguard-logo.png" alt="blockguard logo" className="w-32 h-32 mx-auto" />
        </div>
        <h1 className="text-3xl text-pink-400 font-bold mb-4">Welcome to blockguard</h1>
        <p className="text-white mb-6">Sign up and come to the bubble world</p>
        <div className="space-y-4">
          <button className="bg-gradient-to-r from-pink-400 to-purple-700 text-white px-6 py-3 rounded-lg text-lg">
            Let's Start
          </button>
          <p className="text-gray-400">I already have an account</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
