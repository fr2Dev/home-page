import React, { FC, useRef, useState, useEffect } from 'react';
import { Todo } from '../../definitions/interfaces';
import useLogic from './logic/useLogic';
import { List, Menu, Form } from './index';
import { Container, Button } from './styled/index';

interface TodoListProps {}

const TodoList: FC<TodoListProps> = () => {
  const {
    state,
    handleTodoInput,
    addTodo,
    removeTodo,
    toggleDone,
    orderTodos,
    updateTodos,
    removeAll,
    removeDone,
    checkAll,
    uncheckAll,
  } = useLogic();
  const { todos, todoValue } = state;
  const [inputVisible, setInputVisible] = useState(todos.length !== 0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('todos')) {
      // We have items
      const localTodos: Todo[] = JSON.parse(localStorage.getItem('todos') as string);
      updateTodos(localTodos);
    }
  }, []);

  const showForm = todos.length !== 0 || inputVisible;

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

  const formProps = {
    handleTodoInput,
    addTodo,
    showForm,
    inputRef,
    todoValue,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="themable">
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
        <Form {...formProps} />
      </Container>
    </div>
  );
};

export default TodoList;
