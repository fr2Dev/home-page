import React, { FC, useEffect } from 'react';

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
    <ul ref={menuRef} style={{ background: 'red' }}>
      <li>
        <button onClick={checkAll}>Check all</button>
      </li>
      <li>
        <button onClick={uncheckAll}>Uncheck all</button>
      </li>
      <li>
        <button onClick={removeDone}>Remove done</button>
      </li>
      <li>
        <button onClick={removeAll}>Remove all</button>
      </li>
    </ul>
  );
};

export default MenuList;
