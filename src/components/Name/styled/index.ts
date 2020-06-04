import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  opacity: 0;
`;

export const Container = styled.div`
  & *:focus {
    outline-color: var(--color-interaction);
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
  font-size: var(--font-size-greeting);
  font-weight: 700;
`;
