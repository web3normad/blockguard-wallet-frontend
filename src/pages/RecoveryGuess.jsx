import React from 'react'

const RecoveryGuess = () => {
  return (
    <div className="mt-8">
      <h3 className="text-white  text-center text-[18px]">
        Confirm Secret Recovery Phrase
      </h3>
      <h2 className="text-[#FF2CDF] mt-20 text-center">
        confirm secret recovery phrase
      </h2>
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
            placeholder=""
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center placeholder-black"
            placeholder="jump"
          />
          <input
            type="text"
            className="w-20 rounded-lg text-center"
            placeholder=""
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
            placeholder=""
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
      <button
        className=" mt-6 ml-11
       text-white text-lg 
         rounded-3xl px-2 py-1 w-[251px]
        bg-gradient-to-r from-primary-50 to-primary-100 hover:bg-opacity-75"
      >
        Next
      </button>
    </div>
  );
};
export default RecoveryGuess;