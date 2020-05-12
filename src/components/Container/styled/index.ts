import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

const padding = '8px';

export const ContainerStyled = styled.div<ContainerProps>`
  animation: flash 0.35s linear;
  background-image: ${(props) => `url(${props.background})`};
  min-height: calc(100vh - (2 * ${padding}));
  min-width: calc(100vw - (2 * ${padding}));
  padding: 8px;
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: -1;
  }
`;
