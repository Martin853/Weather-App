import React from 'react';

export const Search = () => {
  return (
    <div className="w-full h-24 mt-2 flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        placeholder="Search for a city"
        className="font-openSans outline-none border-2 p-1 rounded-xl"
      />
      <button className="font-openSans outline-none p-1 rounded-2xl border-2 text-lg font-semibold border-green-800 hover:bg-green-800 text-white transition-all duration-300 ease-linear cursor-pointer">
        Display in °C
      </button>
    </div>
  );
};
