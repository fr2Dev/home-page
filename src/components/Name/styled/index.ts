import styled, { keyframes } from 'styled-components';

export const ButtonStyled = styled.button`
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
  border: none;
  font-size: 2rem;
  font-weight: 700;
  animation: flash 0.35s linear;

  @keyframes flash {
    from {
      background: rgba(255, 255, 255, 0.25);
    }

    to {
      background: transparent;
    }
  }
`;
