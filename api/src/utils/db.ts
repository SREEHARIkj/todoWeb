// import * as dotenv from "dotenv";
//  dotenv.config();
import mysql from "mysql";
import { drizzle } from "drizzle-orm/mysql2";

export const db_pool = mysql.createPool({
  host: 'mysql',
  database: process.env.DB || 'todo_schema',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
});

export const db_drizzel_pool = drizzle(db_pool);
 