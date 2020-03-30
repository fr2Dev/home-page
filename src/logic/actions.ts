import React from 'react';
import uniqid from 'uniqid';
import { State, Todo } from '../definitions/interfaces';
import { Action } from '../definitions/types';

export const getHandleTodoInput = (dispatch: React.Dispatch<Action>) => (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatch({ type: 'SET_TODO_VALUE', payload: e.target.value });
};

export const getAddTodo = (state: State, dispatch: React.Dispatch<Action>) => (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const { todoValue } = state;
  const hasValue = todoValue.length > 0;
  if (hasValue) {
    const todo: Todo = { value: state.todoValue, isDone: false, id: uniqid() };
    dispatch({ type: 'ADD_TODO', payload: todo });
    dispatch({ type: 'SET_TODO_VALUE', payload: '' });
    localStorage.setItem('todos', JSON.stringify([...state.todos, todo]));
  }
};

export const getRemoveTodo = (state: State, dispatch: React.Dispatch<Action>) => (i: number) => {
  const newTodos = [...state.todos];

  newTodos.splice(i, 1);
  dispatch({ type: 'UPDATE_TODOS', payload: newTodos });
  localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const getToggleDone = (state: State, dispatch: React.Dispatch<Action>) => (i: number) => {
  const newTodos = [...state.todos];

  newTodos[i].isDone = !newTodos[i].isDone;
  dispatch({ type: 'UPDATE_TODOS', payload: newTodos });
  localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const getOrderTodos = (state: State, dispatch: React.Dispatch<Action>) => (
  prevIndex: number,
  nextIndex: number
) => {
  const { todos } = state;
  const newTodos = [...todos];
  const moveTodo = (from: number, to: number) => {
    newTodos.splice(to, 0, newTodos.splice(from, 1)[0]);
  };

  moveTodo(prevIndex, nextIndex);
  dispatch({ type: 'UPDATE_TODOS', payload: newTodos });
  localStorage.setItem('todos', JSON.stringify(newTodos));
};

export const getUpdateTodos = (dispatch: React.Dispatch<Action>) => (localTodos: Todo[]) => {
  dispatch({ type: 'UPDATE_TODOS', payload: localTodos });
};
