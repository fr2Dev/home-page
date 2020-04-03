import React, { FC, useRef, useState } from 'react';
import { Todo } from '../../definitions/interfaces';
import List from './List';
import Menu from './Menu';
import { Container, Form, Button } from './styled';

interface TodoListProps {
  value: {
    todoValue: string;
    todos: Todo[];
  };
  actions: {
    handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
    removeTodo: (i: number) => void;
    toggleDone: (i: number) => void;
    orderTodos: (prevIndex: number, nextIndex: number) => void;
    removeAll: () => void;
    removeDone: () => void;
    checkAll: () => void;
    uncheckAll: () => void;
  };
}

const TodoList: FC<TodoListProps> = ({ value, actions }) => {
  const { todos, todoValue } = value;
  const {
    handleTodoInput,
    addTodo,
    removeTodo,
    toggleDone,
    orderTodos,
    removeAll,
    removeDone,
    checkAll,
    uncheckAll,
  } = actions;
  const [inputVisible, setInputVisible] = useState(todos.length !== 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const listProps = {
    list: todos,
    remove: removeTodo,
    toggleDone,
    orderTodos,
  };

  const menuProps = {
    todos,
    removeAll,
    removeDone,
    checkAll,
    uncheckAll,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          <div>
            <Menu {...menuProps} />
            <List {...listProps} />
          </div>
        )}
        <Form
          onSubmit={addTodo}
          style={{ visibility: todos.length !== 0 || inputVisible ? 'visible' : 'hidden' }}
        >
          <input
            ref={inputRef}
            value={todoValue}
            onChange={handleTodoInput}
            placeholder="New Todo"
          />
          {todoValue.length !== 0 && (
            <Button type="submit" className="submit">
              Add
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default TodoList;
