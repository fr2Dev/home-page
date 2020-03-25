import React, { FC } from 'react';
import { Todo } from '../../definitions/interfaces';
import List from './List';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTodo: (i: number) => void;
  toggleDone: (i: number) => void;
  orderTodos: (prevIndex: number, nextIndex: number) => void;
}

const TodoList: FC<TodoListProps> = ({
  todoValue,
  handleTodoInput,
  addTodo,
  todos,
  removeTodo,
  toggleDone,
  orderTodos,
}) => {
  const listProps = {
    list: todos,
    remove: removeTodo,
    toggleDone,
    orderTodos,
  };

  return (
    <div>
      <List {...listProps} />
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoList;
