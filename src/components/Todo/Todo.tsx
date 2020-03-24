import React from 'react';
import { Todo } from '../../definitions/interfaces';

export interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todoValue, handleTodoInput, addTodo, todos }) => {
  return (
    <div>
      {todos.map((el, i) => {
        return <li key={i}>{el.value}</li>;
      })}
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
      </form>
    </div>
  );
};

export default TodoList;
