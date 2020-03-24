import React from 'react';

export interface TodoProps {
  todoValue: string;
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Todo: React.SFC<TodoProps> = ({ todoValue, handleTodoInput }) => {
  return (
    <div>
      <input value={todoValue} onChange={handleTodoInput} />
    </div>
  );
};

export default Todo;
