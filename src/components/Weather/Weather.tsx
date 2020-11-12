import React, { FC, useEffect, memo } from 'react';
import { Loader } from '../';
import useWeather from './logic/useLogic';
import { Container, Wrapper } from './styled';

export interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
  const { weather, displayWeather, isFetching } = useWeather();
  useEffect(() => {
    displayWeather();
  }, []);

  const { name, temp, icon } = weather;

  return (
    <div>
      <Wrapper>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <Container>
              <img src={icon} />
              <span>{temp}°</span>
            </Container>
            <p>{name}</p>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default memo(Weather);
