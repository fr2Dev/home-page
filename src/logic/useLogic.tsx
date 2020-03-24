import React, { useReducer } from 'react';
import { State } from '../definitions/interfaces';
import { Action } from '../definitions/types';

const useLogic = (initialState: State = defaultState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTodoInput = getHandleTodoInput(dispatch);

  return { state, handleTodoInput };
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

const defaultState: State = {
  todos: [],
  todoValue: '',
};

export default useLogic;
