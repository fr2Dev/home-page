import React, { FC, useEffect, memo } from 'react';
import { Loader } from '../';
import useWeather from './logic/useLogic';
import { Container, Wrapper } from './styled';

export interface WeatherProps {}

const Weather: FC<WeatherProps> = () => {
  const { city, handleCity, weather, displayWeather, isFetching } = useWeather();
  useEffect(() => {
    displayWeather();
  }, [city]);

  const { temp, icon } = weather;

  return (
    <div>
      <Wrapper>
        {isFetching ? (
          <Loader />
        ) : icon !== 'not found' ? (
          <>
            <Container>
              <img src={icon} />
              <span>{temp}°C</span>
            </Container>
          </>
        ) : (
          <p>City not found</p>
        )}
        <select
          name="city"
          id="city"
          onChange={(e) => {
            handleCity(e.target.value);
          }}
        >
          {cities.map((c, i) => (
            <option value={c} key={i.toString()} selected={city === c}>
              {capitalize(c)}
            </option>
          ))}
        </select>
      </Wrapper>
    </div>
  );
};

const cities = ['brest', 'lille', 'lyon', 'marseille', 'paris', 'strasbourg', 'toulouse'];
const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export default memo(Weather);
