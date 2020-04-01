import React, { useEffect } from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';
import { Todo as ITodo } from './definitions/interfaces';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './style';

function App() {
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
  const todosProps = {
    value: {
      todos,
      todoValue,
    },
    actions: {
      handleTodoInput,
      addTodo,
      removeTodo,
      toggleDone,
      orderTodos,
      removeAll,
      removeDone,
      checkAll,
      uncheckAll,
    },
  };

  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('todos')) {
      // We have items
      const localTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string);
      updateTodos(localTodos);
    }
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Todo {...todosProps} />
      </ThemeProvider>
    </div>
  );
}

export default App;
