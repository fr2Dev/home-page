import React from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';

function App() {
  const { state, handleTodoInput, addTodo } = useLogic();
  const { todos, todoValue } = state;
  return (
    <div>
      <Todo
        todoValue={todoValue}
        handleTodoInput={handleTodoInput}
        addTodo={addTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
