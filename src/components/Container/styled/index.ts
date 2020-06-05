import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const ContainerStyled = styled.div<ContainerProps>`
  animation: flash 0.35s linear;
  background: ${(props) => `url(${props.background}) center`};
  min-height: calc(100vh - (2 * var(--padding)));
  min-width: calc(100vw - (2 * var(--padding)));
  padding: var(--padding);
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
    background-color: var(--color-overlay);
    z-index: -1;
  }
`;