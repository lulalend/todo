export type Task = {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export type Sort = 'name' | 'status';