import styled from 'styled-components';

export const ListActions = styled.ul`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  top: 100%;
  padding: 0.5rem;
  position: absolute;
  margin-top: 0;
  right: 0;
  width: 7rem;
  z-index: 3;

  button {
    width: 100%;
  }
`;
export const ButtonAction = styled.button`
  background-color: ${({ theme }) => theme.colors.outline};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.background};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.font};
  }
`;
