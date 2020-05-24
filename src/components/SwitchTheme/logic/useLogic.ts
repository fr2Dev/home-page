import React, { FC, useEffect, useState } from 'react';

const useLogic = () => {
  const [isChecked, setIsChecked] = useState(false);
  const init = (className: string) => {
    const themables: Element[] = Array.from(document.getElementsByClassName('themable'));
    themables.forEach((el: Element) => {
      el?.classList.add(className);
    });
    const checked = className === 'light';
    setIsChecked(checked);
  };

  const handleSwitch = () => {
    const switchClass = (el: Element, classRemoved: string, classAdded: string) => {
      el?.classList.remove(classRemoved);
      el?.classList.add(classAdded);
      localStorage.setItem('theme', classAdded);
      setIsChecked(classAdded === 'light');
    };

    const classLight = 'light';
    const classDark = 'dark';
    const themables: Element[] = Array.from(document.getElementsByClassName('themable'));
    themables.forEach((el: Element) => {
      const isLight = el?.classList.contains(classLight);
      return isLight
        ? switchClass(el, classLight, classDark)
        : switchClass(el, classDark, classLight);
    });
  };
  return { init, handleSwitch, isChecked };
};

export default useLogic;
