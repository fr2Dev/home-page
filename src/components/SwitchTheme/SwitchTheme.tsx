import React, { FC } from 'react';
import { Switch } from './styled';

export interface SwitchThemeProps {}

const handleSwitch = () => {
  const classLight = 'light';
  const themables: Element[] = Array.from(document.getElementsByClassName('themable'));
  themables.forEach((el: Element) => {
    const isLight = el?.classList.contains(classLight);
    return isLight ? el?.classList.remove(classLight) : el?.classList.add(classLight);
  });
};

const SwitchTheme: FC<SwitchThemeProps> = () => {
  return (
    <Switch>
      <input type="checkbox" onChange={handleSwitch} id="switch" />
      <label htmlFor="switch">Toggle</label>
    </Switch>
  );
};

export default SwitchTheme;
