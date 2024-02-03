import { db_pool } from "./db";
import { TodoType } from "./types";
export function dataQuering(query: string): Promise<TodoType[]> {
  let result = new Promise<TodoType[]>((resolve, reject) => {
    db_pool.getConnection((error, connection) => {
      if (error) {reject(error);}
      connection.query(query, (error, results, fields) => {
        if (error) {reject(error);}
        resolve(results);
        connection.release();
      });
    });
  });
  return result;
}
