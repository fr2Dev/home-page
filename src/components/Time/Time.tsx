import React, { FC, useState, useEffect } from 'react';
import { getCurrentTime, getGreeting } from './logic/useLogic';
import { Name } from '../index';
import { Container, Greeting, Message, Hours } from './styled';

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
      <Hours>{time}</Hours>
      <Message>
        <Greeting>{greeting}, </Greeting>
        <Name />
      </Message>
    </Container>
  );
};

export default Time;
