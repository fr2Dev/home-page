import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Greeting = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

export const Message = styled(Greeting)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
