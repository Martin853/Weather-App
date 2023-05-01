import React from 'react';

export const Temperature = (props) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-around items-center">
        <img src={props.image} className="w-16 h-16" />
        <div className="flex flex-col">
          <h1 className="font-openSans font-semibold text-lg text-white">
            Condition: {props.condition}
          </h1>
          {props.unit === 'Celsius' ? (
            <div>
              <h1 className="font-openSans font-semibold text-lg text-white">
                Temperature: {props.temperatureC} °C
              </h1>
              <h1 className="font-openSans font-semibold text-lg text-white">
                Feels Like: {props.temperatureFeelsC} °C
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="font-openSans font-semibold text-lg text-white">
                Temperature: {props.temperatureF} °F
              </h1>
              <h1 className="font-openSans font-semibold text-lg text-white">
                Feels Like: {props.temperatureFeelsF} °F
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4 flex-col mt-1">
        <h1 className="font-openSans font-semibold text-lg text-white">
          UV Index: {props.uvIndex}
        </h1>
        <h1 className="font-openSans font-semibold text-lg text-white">
          Humidity: {props.humidity}
        </h1>
        <h1 className="font-openSans font-semibold text-lg text-white">
          Wind Speed: {props.windSpeed} kph
        </h1>
      </div>
    </div>
  );
};
