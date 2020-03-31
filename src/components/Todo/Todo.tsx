import React, { FC, useRef, useState } from 'react';
import { Todo } from '../../definitions/interfaces';
import List from './List';
import { Container, Form, Button } from './styled';

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
    <Container>
      {todos.length === 0 ? (
        <Button
          onClick={() => {
            setInputVisible(true);
            setTimeout(() => inputRef.current?.focus());
          }}
          style={{ display: inputVisible ? 'none' : 'inlineBlock' }}
        >
          New Todo
        </Button>
      ) : (
        <List {...listProps} />
      )}
      <Form
        onSubmit={addTodo}
        style={{ visibility: todos.length !== 0 || inputVisible ? 'visible' : 'hidden' }}
      >
        <input ref={inputRef} value={todoValue} onChange={handleTodoInput} placeholder="New Todo" />
        {todoValue.length !== 0 && (
          <Button type="submit" className="submit">
            Add
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default TodoList;
