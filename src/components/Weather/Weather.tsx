import React, { FC, useEffect, Fragment, memo } from 'react';
import useWeather from './logic/useLogic';
import { Container } from './styled';

export interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
  const { weather, displayWeather, isFetching } = useWeather();
  useEffect(() => {
    displayWeather();
  }, []);

  const { name, temp, icon } = weather;

  return (
    <div>
      {!isFetching && (
        <Fragment>
          <Container>
            <img src={icon} />
            <span>{temp}°</span>
          </Container>
          <p>{name}</p>
        </Fragment>
      )}
    </div>
  );
};

export default memo(Weather);
