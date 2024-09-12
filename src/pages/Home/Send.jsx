import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineQrcode } from "react-icons/ai";
import profilePic from "../../assets/images/shark.jpg";

const Send = () => {
  // Sample account public address
  const publicAddress = "0x5B38Da6a7cB875f56beddC4";

  // Function to truncate the public address (show only first 5 and last 4 characters)
  const truncateAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center text-center mt-5 space-y-10">
      {/* From Section */}
      <div className="space-y-2 w-72">
        <h1 className="text-primary-400 text-start ml-6">From</h1>
        <button className="flex justify-between items-center rounded-full border-2 text-primary-400 text-sm w-full h-12 px-3">
          <div className="flex items-center">
            <img src={profilePic} alt="profile picture" className="w-8 h-8 rounded-full mr-2" />
            <span>Account 1</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{truncateAddress(publicAddress)}</span>
            <IoIosArrowDown />
          </div>
        </button>
      </div>

      {/* To Section */}
      <div className="space-y-2 w-72">
        <h1 className="text-primary-400 text-start ml-6">To</h1>
        <div className="relative flex items-center">
          <input
            type="text"
            className="border-2 border-gray-300 bg-transparent rounded-full text-sm p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter public address or ENS name"
          />
          <AiOutlineQrcode className="absolute right-3 text-gray-400" />
        </div>
      </div>

      {/* Your Accounts Section */}
       {/* Your Accounts Section */}
       <div className="w-72">
        <h1 className="text-primary-400 text-start ml-5">Your Accounts</h1>
        <div className="flex items-center py-2 gap-2">
          <img src={profilePic} alt="profile picture" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-primary-400 font-semibold text-left">Account 1</h1>
            <p className="text-primary-400 text-left">{truncateAddress(publicAddress)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
