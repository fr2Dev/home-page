import styled from 'styled-components';

export const Switch = styled.div`
  --base: 24px;

  position: absolute;
  bottom: var(--padding);
  right: var(--padding);

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: calc(var(--base) * 2);
    height: var(--base);
    background: #040d1c;
    display: block;
    border-radius: var(--base);
    position: relative;
    transition: 0.3s;
  }

  label:after {
    content: '';
    position: absolute;
    top: calc(var(--base) * 0.05);
    left: calc(var(--base) * 0.05);
    width: calc(var(--base) * 0.9);
    height: calc(var(--base) * 0.9);
    background: #fff;
    box-shadow: 0 0 calc(var(--base) * 0.5) rgba(250, 250, 250, 1);
    border-radius: calc(var(--base) * 0.9);
    transition: 0.3s;
  }

  input:checked + label {
    background: #2a5fba;
  }

  input:checked + label:after {
    background: #f4e94e;
    box-shadow: 0 0 calc(var(--base) * 0.5) rgba(249, 240, 104, 1);
    left: calc(100% - (var(--base) * 0.05));
    transform: translateX(-100%);
  }

  label:active:after {
    width: calc(var(--base) * 1.1);
  }
`;
