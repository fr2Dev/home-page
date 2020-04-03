import React, { FC, useEffect } from 'react';
import { ListActions, ButtonAction } from './styled';

interface MenuListProps {
  menuRef: React.RefObject<HTMLUListElement>;
  close: () => void;
  actions: {
    removeAll: () => void;
    removeDone: () => void;
    checkAll: () => void;
    uncheckAll: () => void;
  };
}

const MenuList: FC<MenuListProps> = ({ menuRef, close, actions }) => {
  const handler = (e: MouseEvent) => {
    if (!menuRef.current?.contains(e.target as Node)) {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const { removeAll, removeDone, checkAll, uncheckAll } = actions;

  return (
    <ListActions ref={menuRef}>
      <li>
        <ButtonAction onClick={checkAll}>Check all</ButtonAction>
      </li>
      <li>
        <ButtonAction onClick={uncheckAll}>Uncheck all</ButtonAction>
      </li>
      <li>
        <ButtonAction onClick={removeDone}>Remove done</ButtonAction>
      </li>
      <li>
        <ButtonAction onClick={removeAll}>Remove all</ButtonAction>
      </li>
    </ListActions>
  );
};

export default MenuList;
