import React from 'react';
import weatherLogo from '../assets/weather.png';

export const Navbar = () => {
  return (
    <div className="w-full h-24 bg-emerald-900 flex justify-center items-center gap-2">
      <img src={weatherLogo} className="w-16" />
      <h1 className="font-openSans text-white text-2xl font-bold">
        Weather App
      </h1>
    </div>
  );
};
