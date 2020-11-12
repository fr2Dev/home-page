import * as React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Bouncer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Bouncer>
  );
};

const Bouncer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 50px;
  height: 16px;
  margin: 8px 0 0 8px;

  div {
    width: 10px;
    height: 10px;
    background: var(--color-light);
    border-radius: 50%;
    animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.1s;
      opacity: 0.8;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
      opacity: 0.6;
    }

    &:nth-child(4) {
      animation-delay: 0.3s;
      opacity: 0.4;
    }
  }

  @keyframes bouncer {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-16px);
    }
  }
`;

export default Loader;
