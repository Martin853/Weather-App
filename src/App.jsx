import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Location } from './components/Location';
import { Temperature } from './components/Temperature';

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

  return (
    <div className="flex flex-col bg-indigo-400 gap-2">
      <Navbar />
      <Search
        handleLocationChange={handleLocationChange}
        unit={unit}
        setUnit={setUnit}
      />
      {weatherData && weatherData.location ? (
        <div className="flex flex-col px-2 mx-auto gap-4">
          <Location
            country={weatherData.location.country}
            city={weatherData.location.name}
            region={weatherData.location.region}
            localTime={weatherData.location.localtime}
          />
          <Temperature
            unit={unit}
            image={weatherData.current.condition.icon}
            condition={weatherData.current.condition.text}
            temperatureC={weatherData.current.temp_c}
            temperatureFeelsC={weatherData.current.feelslike_c}
            temperatureF={weatherData.current.temp_f}
            temperatureFeelsF={weatherData.current.feelslike_f}
            uvIndex={weatherData.current.uv}
            humidity={weatherData.current.humidity}
            windSpeed={weatherData.current.wind_kph}
          />
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-center font-openSans text-2xl font-bold text-white justify-self-center">
            No data
          </h1>
        </div>
      )}
    </div>
  );
};
