import React from 'react';
import { Todo } from '../../definitions/interfaces';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { TaskList, Task } from './styled';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTodo: (i: number) => void;
  toggleDone: (i: number) => void;
  orderTodos: (prevIndex: number, nextIndex: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({
  todoValue,
  handleTodoInput,
  addTodo,
  todos,
  removeTodo,
  toggleDone,
  orderTodos,
}) => {
  const List = getList({
    list: todos,
    remove: removeTodo,
    toggleDone,
    orderTodos,
  });

  return (
    <div>
      {List}
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

interface ListProps {
  list: Todo[];
  remove: (i: number) => void;
  toggleDone: (i: number) => void;
  orderTodos: (prevIndex: number, nextIndex: number) => void;
}

const getList = (props: ListProps) => {
  const { list, remove, toggleDone, orderTodos } = props;

  const onDragEnd = getOnDragEnd(orderTodos);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="1">
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((task, i) => {
              const { value, isDone, id } = task;

              return (
                <Draggable draggableId={id} index={i} key={id}>
                  {(provided) => (
                    <Task
                      key={id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <input
                        type="checkbox"
                        id={id}
                        onChange={() => toggleDone(i)}
                        checked={isDone}
                      />
                      <label htmlFor={id}>{value}</label>
                      <button onClick={() => remove(i)} style={{ marginLeft: '1rem' }}>
                        &times;
                      </button>
                    </Task>
                  )}
                </Draggable>
              );
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

export default TodoList;
