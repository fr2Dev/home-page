import React from 'react';
import { Todo } from '../../definitions/interfaces';
import uniqid from 'uniqid';

interface TodoListProps {
  todoValue: string;
  todos: Todo[];
  handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  removeTodo: (i: number) => void;
  toggleDone: (i: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({
  todoValue,
  handleTodoInput,
  addTodo,
  todos,
  removeTodo,
  toggleDone,
}) => {
  const listProps: ListProps = {
    list: todos,
    remove: removeTodo,
    toggleDone,
  };
  const List = getList(listProps);

  return (
    <div>
      {/* {List} */}
      {todos.map((el, i) => {
        const { value, isDone } = el;

        return (
          <li key={uniqid()}>
            <span onClick={() => toggleDone(i)} style={{ color: isDone ? 'lightgrey' : 'black' }}>
              {value}
            </span>
            <span onClick={() => removeTodo(i)} style={{ marginLeft: '1rem' }}>
              &times;
            </span>
          </li>
        );
      })}
      <form onSubmit={addTodo}>
        <input value={todoValue} onChange={handleTodoInput} />
      </form>
    </div>
  );
};

interface ListProps {
  list: Todo[];
  remove: (i: number) => void;
  toggleDone: (i: number) => void;
}

const getList = (props: ListProps) => {
  const { list, remove, toggleDone } = props;

  return list.map((el, i) => {
    const { value, isDone } = el;

    return (
      <li key={uniqid()} onClick={() => toggleDone(i)}>
        <span style={{ color: isDone ? 'lightgrey' : 'black' }}>{value}</span>
        <span onClick={() => remove(i)} style={{ marginLeft: '1rem' }}>
          &times;
        </span>
      </li>
    );
  });
};

export default TodoList;
