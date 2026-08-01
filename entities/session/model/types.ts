export type SessionMode = '25_5' | '50_10';

export type SessionType = 'focus' | 'short_break' | 'long_break';

export interface Session {
  id: string;

  taskId: string;

  mode: SessionMode;
  type: SessionType;

  startedAt: Date;
  finishedAt?: Date;

  duration: number;

  workLog?: string;
  breakLog?: string;
}
