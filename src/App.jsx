import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState('London');
  const [backgroundImage, setBackgroundImage] = useState(
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0NDMwMjJ8MHwxfHNlYXJjaHwxfHxsb25kb258ZW58MHx8fHwxNjgyOTQ1ODMw&ixlib=rb-4.0.3&q=85'
  );

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=b04816e7eca543749c6121831231004&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [location]);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/search/photos?query=london&per_page=1&client_id=4NfpeS9-piRjRhTcsho_yLHjx1KU-s9juwwMsaP9t6A'
    )
      .then((result) => result.json())
      .then((data) => console.log(data));
  }, [location]);

  console.log(weatherData);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="w-full h-full bg-blend-soft-light bg-opacity-40 bg-black bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Search />
      </div>
    </div>
  );
};
