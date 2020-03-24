import React from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';

function App() {
  const { state, handleTodoInput, addTodo, removeTodo } = useLogic();
  const { todos, todoValue } = state;
  return (
    <div>
      <Todo
        todoValue={todoValue}
        handleTodoInput={handleTodoInput}
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
