export interface Todo {
  value: string;
  isDone: boolean;
  id: string;
}

export interface State {
  todos: Todo[] | [];
  todoValue: string;
}
