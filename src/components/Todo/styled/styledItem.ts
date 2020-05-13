import styled from 'styled-components';
import { rgba } from 'polished';

interface TaskProps {
  isDragging: boolean;
}

export const Task = styled.li<TaskProps>`
  align-items: center;
  background-color: var(--color-foreground);
  color: var(--color-font);
  display: flex;
  opacity: ${({ isDragging }) => (isDragging ? '0.65' : '1')};
  padding: 4px;

  &:hover,
  &:focus {
    background-color: var(--color-opacity-lowest);
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

export const Label = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
  position: relative;
  margin: 0.2rem;

  input {
    cursor: pointer;
    position: relative;
    margin: 0.3rem 1rem 0 0;
    top: -0.375rem;

    &:before {
      content: '';
      border: 2px solid var(--color-opacity);
      height: 1rem;
      left: 0;
      position: absolute;
      transition: all 0.15s cubic-bezier(0, 1.45, 1, 0.98);
      width: 1rem;
      z-index: 1;
    }

    &:after {
      background: var(--color-foreground);
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
        border-color: var(--color-interaction);
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
      background: var(--color-font);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-150%, -50%);
    }
  }
`;
