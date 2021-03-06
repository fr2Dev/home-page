import React, { FC, useEffect, memo } from 'react';
import useQuote from './logic/useLogic';
import { QStyled, Container } from './styled';

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

  return (
    <Container>
      <QStyled>{dailyQuote}</QStyled>
    </Container>
  );
};

export default memo(Quote);
