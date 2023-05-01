import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Location } from './components/Location';

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

  console.log(weatherData);

  if (weatherData === undefined) {
    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="w-full h-full bg-indigo-400 flex flex-col items-center gap-2">
          <Search
            handleLocationChange={handleLocationChange}
            unit={unit}
            setUnit={setUnit}
          />
          <h1 className="font-openSans text-2xl font-bold text-white justify-self-center">
            No data
          </h1>
        </div>
      </div>
    );
  }

  if (weatherData.error) {
    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="w-full h-full bg-indigo-400 flex flex-col items-center gap-2">
          <Search
            handleLocationChange={handleLocationChange}
            unit={unit}
            setUnit={setUnit}
          />
          <h1 className="font-openSans text-2xl font-bold text-white justify-self-center">
            No data
          </h1>
        </div>
      </div>
    );
  }

  if (weatherData.location) {
    return (
      <div className="flex flex-col bg-indigo-400 gap-2">
        <Navbar />
        <Search
          handleLocationChange={handleLocationChange}
          unit={unit}
          setUnit={setUnit}
        />
        <Location
          country={weatherData.location.country}
          city={weatherData.location.name}
          region={weatherData.location.region}
          localTime={weatherData.location.localtime}
        />
      </div>
    );
  }
};
