import React, { useEffect } from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';
import { Todo as ITodo } from './definitions/interfaces';

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
      const localTodos: ITodo[] = JSON.parse(localStorage.getItem('todos') as string);
      updateTodos(localTodos);
    }
  }, []);
  return (
    <div>
      <Todo
        todoValue={todoValue}
        handleTodoInput={handleTodoInput}
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        toggleDone={toggleDone}
        orderTodos={orderTodos}
      />
    </div>
  );
}

export default App;
