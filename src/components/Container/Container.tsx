import React, { FC, useEffect, Fragment } from 'react';
// import useName from './logic/useLogic';
// import Edit from './Edit';
import { ContainerStyled } from './styled';

export interface ContainerProps {}

const dailyImg = 'https://source.unsplash.com/1920x1080/?wanderlust';

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerStyled className="container" background={dailyImg}>
      {children}
    </ContainerStyled>
  );
};

export default Container;

// https://source.unsplash.com/1920x1080/?wanderlust
