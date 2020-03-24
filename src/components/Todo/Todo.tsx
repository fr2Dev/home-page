import React from 'react';
import { Todo } from '../../definitions/interfaces';
import uniqid from 'uniqid';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todoValue, handleTodoInput, addTodo, todos }) => {
  const List = getList(todos);

  return (
    <div>
      {List}
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
      </form>
    </div>
  );
};

const getList = (list: Todo[]) => list.map((el) => <li key={uniqid()}>{el.value}</li>);

export default TodoList;
