import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task, Label } from './styled';

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
      {(provided, snapshot) => (
        <Task
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Label htmlFor={id}>
            <input type="checkbox" id={id} onChange={() => toggleDone(i)} checked={isDone} />
            <div>{value}</div>
          </Label>
          <button onClick={() => remove(i)} style={{ marginLeft: 'auto' }}>
            &times;
          </button>
        </Task>
      )}
    </Draggable>
  );
};

export default Item;
