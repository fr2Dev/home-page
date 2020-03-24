export interface Todo {
  value: string;
  isDone: boolean;
}

export interface State {
  todos: Todo[] | [];
}
