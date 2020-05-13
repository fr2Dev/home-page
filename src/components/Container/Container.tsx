import React, { FC, useEffect, useState } from 'react';
import { ContainerStyled } from './styled';

export interface ContainerProps {
  children: React.ReactNode;
}

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
