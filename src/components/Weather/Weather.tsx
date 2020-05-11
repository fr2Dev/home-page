import React, { FC, useEffect, Fragment } from 'react';
import useWeather from './logic/useLogic';

export interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
  const { weather, displayWeather, isFetching } = useWeather();
  useEffect(() => {
    displayWeather();
  }, []);

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
