import React, { FC, useEffect, useState } from 'react';
// import useName from './logic/useLogic';
// import Edit from './Edit';
import { ContainerStyled } from './styled';

export interface ContainerProps {}

const Container: FC<ContainerProps> = ({ children }) => {
  const [dailyImg, setDailyImg] = useState('');

  useEffect(() => {
    setDailyImg('https://source.unsplash.com/1920x1080/?wanderlust');
  }, []);
  return (
    <ContainerStyled className="container" background={dailyImg}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
