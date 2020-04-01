import React, { FC, useState, useRef } from 'react';
import MenuList from './MenuList';

interface MenuProps {
  removeAll: () => void;
  removeDone: () => void;
  checkAll: () => void;
  uncheckAll: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const toggle = () => (isOpen ? close : open);

  return (
    <div>
      {/* <button onClick={test}>...</button> */}
      <button onClick={open}>toggle</button>
      <button onClick={close}>close</button>
      {isOpen && <MenuList menuRef={menuRef} close={close} actions={props} />}
    </div>
  );
};

export default Menu;
