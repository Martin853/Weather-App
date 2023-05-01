import React from 'react';

export const Location = (props) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 border-b-2">
      <h1 className="font-openSans font-semibold text-lg text-white text-center">
        Country: {props.country}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-center">
        City: {props.city}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-center">
        Region: {props.region}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-center">
        Local Time: {props.localTime}
      </h1>
    </div>
  );
};
