import { mysqlTable, uniqueIndex, varchar, serial, timestamp } from 'drizzle-orm/mysql-core';
// declaring enum in database
export const todos_tbl = mysqlTable(
  'todo_tbl',
  {
    id: serial('id').primaryKey(),
    todo: varchar('todo', { length: 256 }),
    created_at: timestamp('created_at'),
    updated_at: timestamp('updated_at'),
  },
  (todo) => ({
    todoIndex: uniqueIndex('todo_idx').on(todo.todo),
  })
);
