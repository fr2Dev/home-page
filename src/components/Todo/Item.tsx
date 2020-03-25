import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from './styled';

interface ItemProps {
  id: string;
  i: number;
  isDone: boolean;
  value: string;
  remove: (i: number) => void;
  toggleDone: (i: number) => void;
}

const Item: FC<ItemProps> = ({ id, i, isDone, value, remove, toggleDone }) => {
  return (
    <Draggable draggableId={id} index={i}>
      {(provided) => (
        <Task
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input type="checkbox" id={id} onChange={() => toggleDone(i)} checked={isDone} />
          <label htmlFor={id}>{value}</label>
          <button onClick={() => remove(i)} style={{ marginLeft: '1rem' }}>
            &times;
          </button>
        </Task>
      )}
    </Draggable>
  );
};

export default Item;
