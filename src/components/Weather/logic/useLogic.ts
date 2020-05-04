import { useState } from 'react';

const useWeather = (): {
  weather: WeatherInfos;
  displayWeather: () => void;
  isFetching: boolean;
} => {
  const [weather, setWeather] = useState({
    name: 'not found',
    temp: 0,
    text: 'not found',
    icon: 'not found',
  });
  const [isFetching, setIsFetching] = useState(true);

  const getWeather = async () => {
    try {
      const key = '83bbbdcdaa4f44eabad84157200405';
      const city = 'Bussy-saint-Georges';
      const corsProxy = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `${corsProxy}http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;

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
    const formatedWeather: WeatherInfos = {
      name: currentWeather.location.name,
      temp: currentWeather.current.temp_c,
      text: currentWeather.current.condition.text,
      icon: currentWeather.current.condition.icon,
    };
    setWeather(formatedWeather);
  };

  return { weather, displayWeather, isFetching };
};

interface WeatherInfos {
  name: string;
  temp: number;
  text: string;
  icon: string;
}

export default useWeather;
