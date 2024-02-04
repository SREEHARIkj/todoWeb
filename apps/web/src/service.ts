import { api, catchErrorHandeler } from './utils/axios';
import * as config from './config';
import { TODO, TodoType } from './utils/types';
import { AxiosError, AxiosResponse } from 'axios';

export async function getTodos(): Promise<{
  rows: [TodoType];
  count?: number;
}> {
  return api()
    .get(config.routes.getTodos)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function addTodo(todo: TODO): Promise<AxiosResponse | undefined> {
  try {
    const result = await api().post(config.routes.addTodo, { todo });
    return result;
  } catch (error) {
    catchErrorHandeler(error as AxiosError);
  }
}

export async function deleteTodo(id: number): Promise<AxiosResponse | undefined> {
  try {
    const result = await api().delete(`${config.routes.deleteTodo}/${id}`);
    return result;
  } catch (error) {
    catchErrorHandeler(error as AxiosError);
  }
}

export async function updateTodo(id: number, todo: TODO): Promise<AxiosResponse | undefined> {
  try {
    const result = api().put(`${config.routes.updateTodo}/${todo}/${id}`);
    return result;
  } catch (error) {
    catchErrorHandeler(error as AxiosError);
  }
}
