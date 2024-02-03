import { api, catchErrorHandeler } from './utils/axios';
import * as config from './config';
import { TODO, TodoType } from './utils/types';

export async function getTodos(): Promise<{
  rows: [TodoType];
  count?: number;
}> {
  return api()
    .get(config.routes.getTodos)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function addTodo(todo: TODO): Promise<unknown> {
  return api()
    .post(config.routes.addTodo, { todo })
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function deleteTodo(id: number): Promise<unknown> {
  return api()
    .delete(`${config.routes.deleteTodo}/${id}`)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function updateTodo(id: number, todo: TODO): Promise<unknown> {
  return api()
    .put(`${config.routes.updateTodo}/${todo}/${id}`)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}
