import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;

  & *:focus {
    outline-color: ${({ theme }) => theme.colors.outline};
  }
`;

export const Form = styled.form`
  color: ${({ theme }) => theme.colors.font};
  font-size: 18px;

  input,
  button {
    border: none;
    font-size: inherit;
  }

  input {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.font};
    margin-left: 7px;
    padding: 4px 8px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.outline};
  border-radius: 0 4px 4px 0;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: inherit;
  padding: 5px 8px;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.outline};
    color: #333;
  }

  &.submit {
    background-color: transparent;
    color: inherit;
    font-weight: 700;
    text-transform: uppercase;

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.outline};
      color: #333;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
  }
`;
