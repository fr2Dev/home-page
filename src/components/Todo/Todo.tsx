import React from 'react';
import { Todo } from '../../definitions/interfaces';
import uniqid from 'uniqid';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTodo: (i: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({
  todoValue,
  handleTodoInput,
  addTodo,
  todos,
  removeTodo,
}) => {
  const List = getList(todos, removeTodo);

  return (
    <div>
      {List}
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
      </form>
    </div>
  );
};

const getList = (list: Todo[], remove: (i: number) => void) =>
  list.map((el, i) => (
    <li key={uniqid()} onClick={() => remove(i)}>
      {el.value}
    </li>
  ));

export default TodoList;
