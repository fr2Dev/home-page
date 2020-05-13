import React, { FC } from 'react';

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
    <div>
      <input type="checkbox" onChange={handleSwitch} id="theme-switch" />
      <label htmlFor="theme-switch">Switch</label>
    </div>
  );
};

export default SwitchTheme;
