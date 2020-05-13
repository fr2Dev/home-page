import styled from 'styled-components';

export const ListActions = styled.ul`
  background-color: var(--color-foreground);
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
  background-color: var(--color-outline);
  border-radius: 4px;
  border: none;
  color: var(--color-background);

  &:hover,
  &:focus {
    background-color: var(--color-font);
  }
`;
