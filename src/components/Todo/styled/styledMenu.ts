import styled from 'styled-components';
import { rgba } from 'polished';

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
