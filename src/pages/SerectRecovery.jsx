import React from 'react'

const SerectRecovery = () => {
  return (
    <div className="mt-8">
      <h3 className="text-white  text-center text-[18px]">
      Write down your Secret Recovery Phrase
      </h3>
      <h2 className="text-white mt-20 text-center">
      Tips to safeguarding your secret recovery phases:
      </h2>
      <ul className="list-disc pl-4">
        <li>Save in a password manager</li>
        <li>Store in a safe deposit box</li>
        <li>Write down and store in multiple secret places</li>

        </ul>
      <div className="h-[236px] mx-auto mt-8 text-center w-[319px] rounded-[10px]  bg-primary-300">
        <div className=" flex justify-between pt-4 mx-4">
          <input
            type="text"
            className="rounded-lg w-20 text-center placeholder-black "
            placeholder="goat"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="flood"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="ramp"
          />
        </div>
        <div className=" flex justify-between pt-8 mx-4 ">
          <input
            type="text"
            className="rounded-lg w-20 text-center "
            placeholder="think"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="jump"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center"
            placeholder="stream"
          />
        </div>
        <div className=" flex justify-between pt-8 mx-4">
          <input
            type="text"
            className="rounded-lg w-20 text-center placeholder-black"
            placeholder="mother"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center"
            placeholder="anchor"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="demand"
          />
        </div>
        <div className=" flex justify-between pt-10 mx-4">
          <input
            type="text"
            className="rounded-lg w-20 text-center placeholder-black"
            placeholder="fuse"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="flash"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="block"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-pink-500"
              checked={!showPhrase}
              onChange={() => setShowPhrase(!showPhrase)}
            />
            <span className="text-sm">Hide seed phrase</span>
          </label>
          <button className="text-pink-500 text-sm flex items-center space-x-1">
            <span>Copy to clipboard</span>
            <span className="material-icons">content_copy</span>
          </button>
        </div>
      <button
        className=" mt-6 ml-11
       text-white text-lg 
         rounded-3xl px-2 py-1 w-[251px]
        bg-gradient-to-r from-primary-50 to-primary-100 hover:bg-opacity-75"
      >
        Confirm
      </button>
    </div>
  );
};
export default SerectRecovery;