import React from 'react';
import { Todo } from '../../definitions/interfaces';
import uniqid from 'uniqid';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTodo: (i: number) => void;
  toggleDone: (i: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({
  todoValue,
  handleTodoInput,
  addTodo,
  todos,
  removeTodo,
  toggleDone,
}) => {
  const List = getList({
    list: todos,
    remove: removeTodo,
    toggleDone,
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
}

const getList = (props: ListProps) => {
  const { list, remove, toggleDone } = props;

  return list.map((task, i) => {
    const { value, isDone } = task;

    return (
      <li key={uniqid()}>
        <span onClick={() => toggleDone(i)} style={{ color: isDone ? 'lightgrey' : 'black' }}>
          {value}
        </span>
        <span onClick={() => remove(i)} style={{ marginLeft: '1rem' }}>
          &times;
        </span>
      </li>
    );
  });
};

export default TodoList;
