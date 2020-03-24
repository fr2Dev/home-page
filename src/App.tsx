import React from 'react';
import { Todo } from './components';
import useLogic from './logic/useLogic';

function App() {
  const { state, handleTodoInput } = useLogic();
  const { todoValue } = state;
  return (
    <div>
      <Todo todoValue={todoValue} handleTodoInput={handleTodoInput} />
    </div>
  );
}

export default App;
