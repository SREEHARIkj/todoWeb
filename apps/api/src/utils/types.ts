import { todos_tbl } from '../db/schema';

export type TodoType = typeof todos_tbl.$inferSelect;
