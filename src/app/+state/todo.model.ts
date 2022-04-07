export enum ToDoStatus {
  pending = 'pending',
  completed = 'completed',
}

export interface ToDo {
  id: number;
  user_id: number;
  title: string;
  due_on: Date;
  status: ToDoStatus;
}
