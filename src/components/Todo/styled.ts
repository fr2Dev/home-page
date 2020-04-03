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

  &:hover,
  &:focus {
    background-color: ${({ theme }) => rgba(theme.colors.font, 0.05)};
  }

  button,
  input,
  label {
    font-size: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    color: inherit;
    opacity: 0%;
    transform: scale(1);

    &:hover,
    &:focus {
      color: #f44336;

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

  .party {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    display: inline-block;
    margin-left: 0.25rem;
    transform-origin: 0 50%;

    @keyframes shake {
      0% {
        transform: rotate(0);
      }
      15% {
        transform: rotate(-5deg);
      }
      30% {
        transform: rotate(5deg);
      }
      45% {
        transform: rotate(-4deg);
      }
      60% {
        transform: rotate(4deg);
      }
      75% {
        transform: rotate(-2deg);
      }
      85% {
        transform: rotate(2deg);
      }
      92% {
        transform: rotate(-1deg);
      }
      100% {
        transform: rotate(0);
      }
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

export const Label = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
  position: relative;
  margin: 0.2rem;

  input {
    position: relative;
    margin: 0.3rem 1rem 0 0;
    top: -0.375rem;

    &:before {
      content: '';
      border: 2px solid ${({ theme }) => rgba(theme.colors.font, 0.15)};
      height: 1rem;
      left: 0;
      position: absolute;
      transition: all 0.15s cubic-bezier(0, 1.45, 1, 0.98);
      width: 1rem;
      z-index: 1;
    }

    &:after {
      background: ${({ theme }) => theme.colors.foreground};
      content: '';
      cursor: pointer;
      height: 1.25rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 1.25rem;
    }

    &:checked {
      &:before {
        border-color: ${({ theme }) => theme.colors.outline};
        border-top-style: none;
        border-right-style: none;
        height: 0.5rem;
        transform: rotate(-45deg);
      }

      & + div {
        opacity: 0.45;

        &::before {
          transform: translate(-50%, -50%);
          transition: transform 0.35s cubic-bezier(0, 1.45, 1, 0.98);
        }
      }
    }
  }
  div {
    display: inline-block;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      background: ${({ theme }) => theme.colors.font};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-150%, -50%);
    }
  }
`;
