import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState('London');

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=b04816e7eca543749c6121831231004&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [location]);

  console.log(weatherData);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full h-full">
        <Search />
      </div>
    </div>
  );
};
