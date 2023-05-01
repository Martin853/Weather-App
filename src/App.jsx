import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState('London');
  const [unit, setUnit] = useState('Celsius');

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=b04816e7eca543749c6121831231004&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [location]);

  // Location Change

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
  };

  // console.log(weatherData);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full h-full bg-indigo-400">
        <Search
          handleLocationChange={handleLocationChange}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    </div>
  );
};
