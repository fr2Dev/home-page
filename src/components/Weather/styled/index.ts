import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;

  span {
    font-size: 1.6rem;
  }

  & + p {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
`;
