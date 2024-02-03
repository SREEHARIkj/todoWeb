import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { dataQuering } from './utils/db_service';
import { TodoType } from './utils/types';
// import https from "https";
// import fs from "fs";

const app = express();

const corsOptions = {
  origin: '*', // Specify the allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
  // optionsSuccessStatus: 204, // Specify the status code for successful preflight requests
};
app.use(express.json());
app.use(cors(corsOptions));

const port = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/todos', (req, res) => {
  const result: Promise<TodoType[]> = dataQuering('SELECT * FROM todo_tbl');
  result
    .then((response: TodoType[]) => res.json({ rows: response, count: response.length }))
    .catch((error) => {
      throw error;
    });
});
app.post('/add-todo', (req, res) => {
  const todo = req.body.todo;
  const result = dataQuering(`INSERT INTO todo_tbl (todo) VALUES ('${todo}')`);
  console.log('ADD', result);
  res.json({ message: 'todo added successfully' });
});

app.delete('/delete-todo/:id', (req, res) => {
  const { id } = req.params;
  const result = dataQuering(`DELETE FROM todo_tbl WHERE id=${id}`);

  result.then((res) => console.log(res));

  res.json({ message: 'deleted successfully' });
});

app.put('/update-todo/:todo/:id', (req, res) => {
  const { id, todo } = req.params;
  const result = dataQuering(`UPDATE todo_tbl SET todo = '${todo}' WHERE id=${id}`);
  result.then((res) => console.log(res));

  res.json({ message: 'updated successfully' });
});

// // Configure HTTPS options with the SSL certificate
// const options = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert'),
// };

// // Create an HTTPS server with Express
// const server = https.createServer(options, app);

// // Start the server
// server.listen(port, () => {
//   console.log(`Server is running on https://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
