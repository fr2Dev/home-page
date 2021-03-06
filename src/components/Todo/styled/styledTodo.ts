import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-foreground);
  border-radius: 8px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;

  & *:focus {
    outline-color: var(--color-interaction);
  }
`;

export const Form = styled.form`
  color: var(--color-font);
  font-size: 18px;

  input,
  button {
    border: none;
    font-size: inherit;
  }

  input {
    background-color: transparent;
    color: var(--color-font);
    margin-left: 7px;
    padding: 4px 8px;
  }
`;

export const Button = styled.button`
  background-color: var(--color-interaction);
  border-radius: 0 4px 4px 0;
  border: none;
  color: var(--color-background);
  font-size: inherit;
  padding: 5px 8px;

  &:focus,
  &:hover {
    background-color: var(--color-interaction);
    color: var(--color-background-main);
  }

  &.submit {
    background-color: transparent;
    color: inherit;
    font-weight: 700;
    text-transform: uppercase;

    &:focus,
    &:hover {
      background-color: var(--color-interaction);
      color: var(--color-background-main);
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--padding);
  position: absolute;
  right: 0;
  top: 0;
`;
