import React, { FC, useState, useRef } from 'react';
import MenuList from './MenuList';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
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
      {isOpen && <MenuList menuRef={menuRef} close={close} />}
    </div>
  );
};

export default Menu;
