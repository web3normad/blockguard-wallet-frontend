import React, { useState } from 'react';
import { GoCopy } from 'react-icons/go';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SecretRecovery = () => {
  const [showPhrase, setShowPhrase] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const navigate = useNavigate();

  // Example seed phrases
  const seedPhrases = [
    'goat', 'flood', 'ramp', 'think', 'jump',
    'stream', 'mother', 'anchor', 'demand',
    'fuse', 'flash', 'block'
  ];

  const handleSecretGuess = () => {
    navigate('/recovery-guess');
  };

  // Function to copy seed phrases to the clipboard
  const handleCopyToClipboard = () => {
    const phrases = seedPhrases.join(' ');
    navigator.clipboard.writeText(phrases)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear after 2 seconds
      })
      .catch(() => setCopySuccess('Failed to copy!'));
  };

  return (
    <div className="h-[600px] flex flex-col items-center p-4 overflow-auto">
      <h3 className="text-white text-center text-xl mb-4">
        Write down your Secret Recovery Phrase
      </h3>
      <h2 className="text-white text-center mb-2">
        Tips to safeguarding your secret recovery phrases:
      </h2>
      <ul className="list-disc pl-4 text-white mb-4">
        <li>Save in a password manager</li>
        <li>Store in a safe deposit box</li>
        <li>Write down and store in multiple secret places</li>
      </ul>
      <div className="h-[30%] mx-auto text-center w-full max-w-[400px] bg-primary-300 rounded-[10px] p-4 overflow-auto">
        {/* Hidden and visible phrases */}
        <div className="flex flex-wrap justify-between gap-2 mb-4">
          {seedPhrases.map((phrase, index) => (
            <input
              key={index}
              type={showPhrase ? "text" : "password"}
              className="rounded-lg w-[30%] text-center placeholder-black"
              placeholder={showPhrase ? phrase : "****"}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-[400px] mt-4 mb-2">
        <div className="text-white text-sm flex items-center space-x-2">
          {showPhrase ? (
            <IoEyeOutline
              onClick={() => setShowPhrase(false)}
              className="cursor-pointer text-xl"
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setShowPhrase(true)}
              className="cursor-pointer text-xl"
            />
          )}
          <span className="text-sm">Show seed phrase</span>
        </div>
        <div
          className="text-pink-500 text-sm flex items-center space-x-1 cursor-pointer"
          onClick={handleCopyToClipboard}
        >
          <GoCopy />
          <span>Copy to clipboard</span>
        </div>
      </div>
      {copySuccess && (
        <div className="text-green-500 text-sm mb-2">{copySuccess}</div>
      )}
      <button
        className="mt-2 text-white rounded-full py-2 w-[250px] bg-gradient-to-r from-primary-50 to-primary-100 hover:bg-opacity-75"
        onClick={handleSecretGuess}
      >
        Next
      </button>
    </div>
  );
};

export default SecretRecovery;
