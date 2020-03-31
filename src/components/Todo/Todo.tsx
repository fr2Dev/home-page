import React, { FC, useRef, useState } from 'react';
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
  const [inputVisible, setInputVisible] = useState(todos.length !== 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const listProps = {
    list: todos,
    remove: removeTodo,
    toggleDone,
    orderTodos,
  };

  return (
    <div>
      {!inputVisible ? (
        <button
          onClick={() => {
            setInputVisible(true);
            setTimeout(() => inputRef.current?.focus());
          }}
        >
          New task
        </button>
      ) : (
        <List {...listProps} />
      )}
      <form onSubmit={addTodo} style={{ visibility: inputVisible ? 'visible' : 'hidden' }}>
        <input ref={inputRef} value={todoValue} onChange={handleTodoInput} />
        <button type="submit" disabled={todoValue.length === 0}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoList;
