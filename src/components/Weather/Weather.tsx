import React, { FC, useEffect, Fragment } from 'react';
import useWeather from './logic/useLogic';

export interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
  const { weather, displayWeather, isFetching } = useWeather();
  useEffect(() => {
    displayWeather();
  }, []);

  console.log(
    '%c☘ %cweather%c:',
    'font-weight:bold;color: #0F9D58;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #0F9D58;',
    'font-weight:bold;',
    weather
  );

  const { name, temp, text, icon } = weather;

  return (
    <div>
      {!isFetching && (
        <Fragment>
          <img src={icon} />
          <p>{name}</p>
          <p>{temp}°C</p>
          <p>{text}</p>
        </Fragment>
      )}
    </div>
  );
};

export default Weather;
