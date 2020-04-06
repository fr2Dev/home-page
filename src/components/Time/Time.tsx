import React, { FC, useState, useEffect } from 'react';

export interface TimeProps {}

const Time: FC<TimeProps> = () => {
  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    const t = setInterval(() => {
      const currentTime = getCurrentTime();
      setTime(currentTime);
    }, 3000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <div>{time}</div>;
};

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = getTwoDigit(getHoursFormat(currentDate.getHours()));
  const currentMinute = getTwoDigit(currentDate.getMinutes());
  const indicator = currentDate.getHours() > 12 ? 'pm' : 'am';
  const currentTime = `${currentHour}:${currentMinute} ${indicator}`;

  return currentTime;
};

const getTwoDigit = (number: number) => {
  if (number < 10) return `0${number}`;
  return number.toString();
};

const getHoursFormat = (hour: number) => {
  if (hour > 12) return hour - 12;
  return hour;
};

export default Time;
