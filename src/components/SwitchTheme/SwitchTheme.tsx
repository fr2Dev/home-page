import React, { FC, useEffect, useState } from 'react';
import { Switch } from './styled';
import useLogic from './logic/useLogic';

export interface SwitchThemeProps {}

const SwitchTheme: FC<SwitchThemeProps> = () => {
  const { init, handleSwitch } = useLogic();
  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
      init(theme as string);
    } else {
      init('dark');
    }
  }, []);

  const getInitialChecked = () => {
    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
    return theme === 'dark' ? false : true;
  };

  const isChecked = getInitialChecked();

  return (
    <Switch>
      <input type="checkbox" onChange={handleSwitch} id="switch" checked={isChecked} />
      <label htmlFor="switch">Toggle</label>
    </Switch>
  );
};

export default SwitchTheme;
