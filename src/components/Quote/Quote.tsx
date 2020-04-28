import React, { FC, useEffect } from 'react';
import useQuote from './logic/useLogic';

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => {
  const { handleDayChange, init, dailyQuote } = useQuote();

  useEffect(() => {
    if (localStorage.length === 0 || !localStorage.getItem('currentDay')) {
      init();
    } else {
      const day = Number(localStorage.getItem('currentDay'));
      handleDayChange(day);
    }
  }, []);

  return <div>{dailyQuote}</div>;
};

export default Quote;
