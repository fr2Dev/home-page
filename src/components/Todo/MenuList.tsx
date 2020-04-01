import React, { FC, useEffect } from 'react';

interface MenuListProps {
  menuRef: React.RefObject<HTMLUListElement>;
  close: () => void;
}

const MenuList: FC<MenuListProps> = ({ menuRef, close }) => {
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
  return (
    <ul ref={menuRef} style={{ background: 'red' }}>
      <li>
        <button>Check all</button>
      </li>
      <li>
        <button>Uncheck all</button>
      </li>
      <li>
        <button>Remove done</button>
      </li>
      <li>
        <button>Remove all</button>
      </li>
    </ul>
  );
};

export default MenuList;
