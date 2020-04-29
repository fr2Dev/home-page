import React, { FC, useState, useEffect } from 'react';
import { getCurrentTime, getGreeting } from './logic/useLogic';
import { Container, Greeting } from './styled';

interface TimeProps {}

const Time: FC<TimeProps> = () => {
  const [currentTime, hour24] = getCurrentTime();
  const [time, setTime] = useState(currentTime);
  const [hour, setHour] = useState(hour24);
  const [greeting, setGreeting] = useState(getGreeting(hour));

  useEffect(() => {
    const t = setInterval(() => {
      const [currentTime, hour24] = getCurrentTime();
      setTime(currentTime);
      setHour(hour24);
      setGreeting(getGreeting(hour));
    }, 3000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <Container>
      <h1>{time}</h1>
      <Greeting>{greeting}</Greeting>
    </Container>
  );
};

export default Time;
