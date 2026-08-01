export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;

  estimatedMinutes: number;
  spentMinutes: number;

  notionPageId?: string;
}
