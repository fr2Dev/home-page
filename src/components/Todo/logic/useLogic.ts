import { useReducer } from 'react';
import { State } from '../../../definitions/interfaces';
import { Action } from '../../../definitions/types';
import {
  getHandleTodoInput,
  getAddTodo,
  getRemoveTodo,
  getOrderTodos,
  getToggleDone,
  getUpdateTodos,
  getRemoveAll,
  getRemoveDone,
  getCheckAll,
  getUncheckAll,
} from './actions';

const useLogic = (initialState: State = defaultState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTodoInput = getHandleTodoInput(dispatch);
  const addTodo = getAddTodo(state, dispatch);
  const removeTodo = getRemoveTodo(state, dispatch);
  const toggleDone = getToggleDone(state, dispatch);
  const orderTodos = getOrderTodos(state, dispatch);
  const updateTodos = getUpdateTodos(dispatch);
  const removeAll = getRemoveAll(dispatch);
  const removeDone = getRemoveDone(state, dispatch);
  const checkAll = getCheckAll(state, dispatch);
  const uncheckAll = getUncheckAll(state, dispatch);

  return {
    state,
    handleTodoInput,
    addTodo,
    removeTodo,
    toggleDone,
    orderTodos,
    updateTodos,
    removeAll,
    removeDone,
    checkAll,
    uncheckAll,
  };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case 'UPDATE_TODOS': {
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

const defaultState: State = {
  todos: [],
  todoValue: '',
};

export default useLogic;
