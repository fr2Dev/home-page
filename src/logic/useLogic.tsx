import React, { useReducer } from 'react';
import { State, Todo } from '../definitions/interfaces';
import { Action } from '../definitions/types';

const useLogic = (initialState: State = defaultState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTodoInput = getHandleTodoInput(dispatch);
  const addTodo = getAddTodo(state, dispatch);
  const removeTodo = getRemoveTodo(state, dispatch);

  return { state, handleTodoInput, addTodo, removeTodo };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case 'REMOVE_TODO': {
      return { ...state, todos: action.payload };
    }
    case 'TOGGLE_DONE': {
      return { ...state, todos: action.payload };
    }
    case 'SET_TODO_VALUE': {
      return { ...state, todoValue: action.payload };
    }
    default: {
      return state;
    }
  }
};

const getHandleTodoInput = (dispatch: React.Dispatch<Action>) => (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatch({ type: 'SET_TODO_VALUE', payload: e.target.value });
};
const getAddTodo = (state: State, dispatch: React.Dispatch<Action>) => (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const { todoValue } = state;
  const hasValue = todoValue.length > 0;
  const todo: Todo = { value: state.todoValue, isDone: false };
  if (hasValue) {
    dispatch({ type: 'ADD_TODO', payload: todo });
    dispatch({ type: 'SET_TODO_VALUE', payload: '' });
  }
};
const getRemoveTodo = (state: State, dispatch: React.Dispatch<Action>) => (i: number) => {
  const { todos } = state;
  todos.splice(i, 1);
  dispatch({ type: 'REMOVE_TODO', payload: todos });
};

const defaultState: State = {
  todos: [],
  todoValue: '',
};

export default useLogic;
