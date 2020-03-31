import React, { useEffect } from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';
import { Todo as ITodo } from './definitions/interfaces';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

function App() {
  const {
    state,
    handleTodoInput,
    addTodo,
    removeTodo,
    toggleDone,
    orderTodos,
    updateTodos,
  } = useLogic();
  const { todos, todoValue } = state;

  useEffect(() => {
    if (localStorage.length > 0 && localStorage.getItem('todos')) {
      // We have items
      console.log('useEffect');

      const localTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string);
      updateTodos(localTodos);
    }
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Todo
          todoValue={todoValue}
          handleTodoInput={handleTodoInput}
          todos={todos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          toggleDone={toggleDone}
          orderTodos={orderTodos}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
