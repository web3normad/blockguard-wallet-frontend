import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircleDot } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import { MdCallReceived } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Define token color mapping
const tokenColors = {
  Ethereum: "#627EEA", // Blue for Ethereum
  Bitcoin: "#F7931A",  // Gold for Bitcoin
  USDT: "#26A17B",     // Green for USDT
  BNB: "#F0B90B",      // Yellow for BNB
};

const Home = () => {
  const navigate = useNavigate();
  
  // State to manage the dropdown, selected token, and token list
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({ name: "Ethereum", color: tokenColors["Ethereum"] });
  const [tokens, setTokens] = useState([]);

  // Fetch tokens (this is simulated, in a real app you'd fetch from an API)
  useEffect(() => {
    const fetchTokens = async () => {
      const fetchedTokens = [
        { name: "Ethereum" },
        { name: "Bitcoin" },
        { name: "USDT" },
        { name: "BNB" },
      ];
      // Assign colors dynamically
      const tokensWithColors = fetchedTokens.map(token => ({
        ...token,
        color: tokenColors[token.name] || "#FFF", // Fallback color if not defined
      }));
      setTokens(tokensWithColors);
    };

    fetchTokens();
  }, []);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle token selection
  const selectToken = (token) => {
    setSelectedToken(token);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center text-center mt-2 space-y-5">
      {/* Balance Row */}
      <div className="space-y-3 mb-6">
        <h1 className="text-white text-xl">Available Balance</h1>
        <p className="text-primary-400">$1,500</p>
        <div className="relative ">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center space-x-4 rounded-full bg-purple-400 text-white w-40 py-1"
          >
            <FaRegCircleDot className="mr-2" style={{ color: selectedToken.color }} />
            <span>{selectedToken.name}</span>
            <IoIosArrowDown className="ml-2" />
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
              {tokens.map((token, index) => (
                <li
                  key={index}
                  onClick={() => selectToken(token)}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  <FaRegCircleDot className="mr-2" style={{ color: token.color }} />
                  <span>{token.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Transact Row */}
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <button
            className="rounded-full border-2 border-primary-900 p-3 flex items-center justify-center"
            onClick={() => navigate("/send-token")}
          >
            <BsSendFill size={20} className="text-primary-50" />
          </button>
          <span className="mt-1 text-white">Send</span>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="rounded-full border-2 border-primary-900 p-3 flex items-center justify-center"
            onClick={() => navigate("/receive-token")}
          >
            <MdCallReceived size={20} className="text-primary-50" />
          </button>
          <span className="mt-1 text-white">Receive</span>
        </div>
      </div>

      {/* Tokens Row */}
      <div>
        <div className="flex px-4">
          <h2 className="text-primary-400">Tokens</h2>
        </div>

        <div className="bg-[#373073] w-[350px] h-screen rounded-2xl">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center py-2 gap-2">
              <span className="border-2 border-primary-900 rounded-full p-1">
                <FaEthereum />
              </span>
              <div className="flex flex-col items-start">
                <h1 className="text-primary-400 font-semibold">ETH</h1>
                <p className="text-primary-400">Ethereum</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start">
                <h1 className="text-primary-400 font-semibold">0 ETH</h1>
                <p className="text-primary-400">$0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
