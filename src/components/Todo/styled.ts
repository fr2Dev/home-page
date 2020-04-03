import styled from 'styled-components';
import { rgba } from 'polished';

export const TaskList = styled.ul`
  margin-top: 0;
  padding: 0;
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
    cursor: pointer;
  }
`;

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

interface MenuContainerProps {
  allIsDone: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  justify-content: space-between;
  color: ${({ theme, allIsDone }) => (allIsDone ? theme.colors.outline : theme.colors.font)};
  position: relative;
  width: 100%;

  & > div:first-child {
    margin-left: 0.5rem;

    span {
      font-style: italic;
    }
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

export const Toggle = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  height: 1.8rem;
  justify-content: center;
  width: 1.8rem;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) => rgba(theme.colors.font, 0.15)};
  }

  span {
    position: relative;

    &::before,
    &::after,
    & {
      background-color: ${({ theme }) => theme.colors.font};
      border-radius: 50%;
      height: 0.3rem;
      width: 0.3rem;
    }

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: '';
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: -130%;
    }

    &::after {
      left: 130%;
    }
  }
`;
