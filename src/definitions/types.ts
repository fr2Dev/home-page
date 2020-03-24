import { Todo } from './interfaces';

export type Action =
  | {
      type: 'TOGGLE_DONE';
      payload: Todo[];
    }
  | { type: 'ADD_TODO'; payload: Todo }
  | {
      type: 'REMOVE_TODO';
      payload: Todo[];
    };
