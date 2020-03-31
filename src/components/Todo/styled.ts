import styled from 'styled-components';

export const TaskList = styled.ul`
  margin-top: 0;
  padding: 0;
  list-style-type: none;
`;

interface TaskProps {
  isDragging: boolean;
}

export const Task = styled.li<TaskProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  opacity: ${({ isDragging }) => (isDragging ? '0.65' : '1')};
  padding: 4px;

  button,
  input,
  label {
    font-size: inherit;
  }

  button {
    background-color: inherit;
    border: none;
    color: inherit;
    opacity: 0%;
    transform: scale(1);

    &:hover,
    &:focus {
      color: #f44336;
      cursor: pointer;
      transform: scale(1.25);
      transition: transform 0.15s;
    }
  }

  input {
    &:checked {
      & + label {
        text-decoration: line-through;
        opacity: 0.45;
      }
    }
  }

  &:hover button,
  &:focus button,
  input:focus ~ button,
  button:focus {
    opacity: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  font-size: 20px;
  padding: 1rem;

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
    cursor: pointer;
  }
`;
