import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import { State, Todo } from '../definitions/interfaces';
import { Action } from '../definitions/types';

const useLogic = (initialState: State = defaultState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTodoInput = getHandleTodoInput(dispatch);
  const addTodo = getAddTodo(state, dispatch);
  const removeTodo = getRemoveTodo(state, dispatch);
  const toggleDone = getToggleDone(state, dispatch);
  const orderTodos = getOrderTodos(state, dispatch);

  return { state, handleTodoInput, addTodo, removeTodo, toggleDone, orderTodos };
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
    case 'UPDATE_ORDER_TODO': {
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
  if (hasValue) {
    const todo: Todo = { value: state.todoValue, isDone: false, id: uniqid() };
    dispatch({ type: 'ADD_TODO', payload: todo });
    dispatch({ type: 'SET_TODO_VALUE', payload: '' });
  }
};
const getRemoveTodo = (state: State, dispatch: React.Dispatch<Action>) => (i: number) => {
  const newTodos = [...state.todos];

  newTodos.splice(i, 1);
  dispatch({ type: 'REMOVE_TODO', payload: newTodos });
};
const getToggleDone = (state: State, dispatch: React.Dispatch<Action>) => (i: number) => {
  const newTodos = [...state.todos];

  newTodos[i].isDone = !newTodos[i].isDone;
  dispatch({ type: 'TOGGLE_DONE', payload: newTodos });
};
const getOrderTodos = (state: State, dispatch: React.Dispatch<Action>) => (
  prevIndex: number,
  nextIndex: number
) => {
  const { todos } = state;
  const newTodos = [...todos];
  const moveTodo = (from: number, to: number) => {
    newTodos.splice(to, 0, newTodos.splice(from, 1)[0]);
  };

  moveTodo(prevIndex, nextIndex);
  dispatch({ type: 'UPDATE_ORDER_TODO', payload: newTodos });
};

const defaultState: State = {
  todos: [],
  todoValue: '',
};

export default useLogic;
