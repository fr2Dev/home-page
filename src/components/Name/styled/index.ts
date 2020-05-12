import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0;
`;

export const Container = styled.div`
  & *:focus {
    outline-color: ${({ theme }) => theme.colors.outline};
  }

  &:hover {
    ${ButtonStyled} {
      opacity: 1;
    }
  }
`;

export const InputStyled = styled.input`
  animation: flash 0.35s linear;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 700;
`;
