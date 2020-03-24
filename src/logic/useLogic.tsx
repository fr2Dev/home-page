import React, { useReducer } from 'react';
import { State } from '../definitions/interfaces';
import { Action } from '../definitions/types';

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
    default: {
      return state;
    }
  }
};

const useLogic = (initialState: State) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state };
};
