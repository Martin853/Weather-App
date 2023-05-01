import React from 'react';

export const Location = (props) => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-2 ">
      <h1 className="font-openSans font-semibold text-lg text-white text-start">
        Country: {props.country}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-start">
        City: {props.city}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-start">
        Region: {props.region}
      </h1>
      <h1 className="font-openSans font-semibold text-lg text-white text-start">
        Local Time: {props.localTime}
      </h1>
    </div>
  );
};
