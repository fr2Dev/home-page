import React, { FC } from 'react';
import { Todo } from '../../definitions/interfaces';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { TaskList } from './styled';
import Item from './Item';

interface ListProps {
  list: Todo[];
  remove: (i: number) => void;
  toggleDone: (i: number) => void;
  orderTodos: (prevIndex: number, nextIndex: number) => void;
}

const List: FC<ListProps> = ({ list, remove, toggleDone, orderTodos }) => {
  const onDragEnd = getOnDragEnd(orderTodos);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1">
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((task, i) => {
              const { value, isDone, id } = task;
              const itemProps = { id, i, isDone, value, remove, toggleDone };

              return <Item {...itemProps} key={id} />;
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const getOnDragEnd = (orderTodos: (prevIndex: number, nextIndex: number) => void) => (
  result: DropResult
) => {
  const { destination, source } = result;

  if (!destination) return;

  const isSamePosition =
    destination.droppableId === source.droppableId && destination.index === source.index;
  if (isSamePosition) return;

  orderTodos(source.index, destination.index);
};

export default List;
