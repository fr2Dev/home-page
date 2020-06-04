import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Greeting = styled.div`
  font-size: var(--font-size-greeting);
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const Message = styled(Greeting)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Hours = styled.h1`
  font-size: 8rem;
  margin-bottom: 2rem;
`;
