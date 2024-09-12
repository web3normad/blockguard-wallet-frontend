import React from 'react'

const SerectRecoveryHidden = () => {
  return (
    <div className="mt-8">
      <h3 className="text-white  text-center text-[18px]">
      Write down your Secret Recovery Phrase
      </h3>
      <p className="text-sm text-gray-300 mb-4">
          Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.
        </p>
      <h2 className="text-white mt-20 text-center">
      Tips to safeguarding your secret recovery phases:
      </h2>
      <ul className="list-disc pl-4">
        <li>Save in a password manager</li>
        <li>Store in a safe deposit box</li>
        <li>Write down and store in multiple secret places</li>

        </ul>
        <div className={`flex items-center justify-center w-full h-40 rounded-md mb-6 ${isRevealed ? 'bg-white text-black' : 'bg-purple-500 text-white'}`}>
          {!isRevealed ? (
            <p className="text-lg">Make sure nobody is looking</p>
          ) : (
            <p className="text-lg">your secret recovery phrase here</p>
          )}
        </div>
      
      <button
        className=" mt-6 ml-11
       text-white text-lg 
         rounded-3xl px-2 py-1 w-[251px]
        bg-gradient-to-r from-primary-50 to-primary-100 hover:bg-opacity-75"
      >
        Reveal Secret Recovery Phase
      </button>
    </div>
  );
};
export default SerectRecoveryHidden;