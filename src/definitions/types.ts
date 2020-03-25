import { Todo } from './interfaces';

export type Action =
  | {
      type: 'UPDATE_TODOS';
      payload: Todo[];
    }
  | { type: 'ADD_TODO'; payload: Todo }
  | {
      type: 'SET_TODO_VALUE';
      payload: string;
    };
