import React from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';

function App() {
  const { state, handleTodoInput, addTodo, removeTodo, toggleDone, orderTodos } = useLogic();
  const { todos, todoValue } = state;
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
