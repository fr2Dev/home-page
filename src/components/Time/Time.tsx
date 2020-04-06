import React, { FC, useState, useEffect } from 'react';
import { getCurrentTime, getGreeting } from './logic/useLogic';

interface TimeProps {}

const Time: FC<TimeProps> = () => {
  const [currentTime, hour24] = getCurrentTime();
  const [time, setTime] = useState(currentTime);
  const [hour, setHour] = useState(hour24);

  useEffect(() => {
    const t = setInterval(() => {
      const [currentTime, hour24] = getCurrentTime();
      setTime(currentTime);
      setHour(hour24);
    }, 3000);
    return () => {
      clearInterval(t);
    };
  }, []);

  const greeting = getGreeting(hour);

  return (
    <div>
      <h1>{time}</h1>
      <div>{greeting}</div>
    </div>
  );
};

export default Time;
