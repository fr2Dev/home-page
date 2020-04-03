import React, { FC, useState, useRef } from 'react';
import MenuList from './MenuList';
import { Todo } from '../../definitions/interfaces';
import { MenuContainer, Toggle } from './styled';

interface MenuProps {
  todos: Todo[];
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
  const { todos } = props;
  const { length } = todos;
  const doneLength = todos.filter((todo: Todo) => todo.isDone).length;
  const allIsDone = length === doneLength;

  return (
    <div style={{ display: 'flex' }}>
      <MenuContainer allIsDone={allIsDone}>
        <div>
          <span>{`${doneLength}/${length}`}</span>
          {allIsDone ? <span className="party"> 🎉</span> : ''}
        </div>
        <Toggle onClick={open}>
          <span />
        </Toggle>
        {isOpen && <MenuList menuRef={menuRef} close={close} actions={props} />}
      </MenuContainer>
    </div>
  );
};

export default Menu;
