import React, { FC } from 'react';
import { Form as FormStyled, Button } from './styled/index';

interface FormProps {
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  showForm: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
  todoValue: string;
}

const Form: FC<FormProps> = ({ addTodo, showForm, inputRef, todoValue, handleTodoInput }) => {
  return (
    <FormStyled
      onSubmit={addTodo}
      style={{ visibility: showForm ? 'visible' : 'hidden', height: showForm ? 'auto' : '0' }}
    >
      <input ref={inputRef} value={todoValue} onChange={handleTodoInput} placeholder="New Todo" />
      {todoValue.length !== 0 && (
        <Button type="submit" className="submit">
          Add
        </Button>
      )}
    </FormStyled>
  );
};

export default Form;
