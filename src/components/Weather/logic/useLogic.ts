import { useState } from 'react';

const useWeather = (): {
  weather: WeatherInfos;
  displayWeather: () => void;
  isFetching: boolean;
  city: string;
  handleCity: (city: string) => void;
} => {
  const [weather, setWeather] = useState({
    temp: 0,
    icon: 'not found',
  });
  const localCity = localStorage.length > 0 && localStorage.getItem('cityWeather');
  const [city, setCity] = useState(localCity ? localCity : 'toulouse');
  const [isFetching, setIsFetching] = useState(true);

  const handleCity = (city: string) => {
    setCity(city);
    localStorage.setItem('cityWeather', city);
  };

  const getWeather = async () => {
    try {
      setIsFetching(true);
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `${corsProxy}http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setIsFetching(false);
      return data;
    } catch (error) {
      console.log(
        '%c☘ %cerror%c:',
        'font-weight:bold;color: #f00;font-size:1.2em;',
        'font-weight:bold;border-bottom:2px solid #f00;',
        'font-weight:bold;',
        error
      );
      return {};
    }
  };

  const displayWeather = async () => {
    const currentWeather = await getWeather();
    if (currentWeather.location) {
      const formatedWeather: WeatherInfos = {
        temp: currentWeather.current.temp_c,
        icon: currentWeather.current.condition.icon,
      };
      setWeather(formatedWeather);
    }
  };

  return { city, handleCity, weather, displayWeather, isFetching };
};

interface WeatherInfos {
  temp: number;
  icon: string;
}

export default useWeather;
