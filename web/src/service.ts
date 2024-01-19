import { api, catchErrorHandeler } from "./utils/axios";
import * as config from "./config";
import { TODO } from "./utils/types";

export async function getTodos(): Promise<any> {
  return api()
    .get(config.routes.getTodos)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function addTodo(todo: TODO): Promise<any> {
  return api()
    .post(config.routes.addTodo, { todo })
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function deleteTodo(id: number): Promise<any> {
  return api()
    .delete(`${config.routes.deleteTodo}/${id}`)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}

export async function updateTodo(id: number, todo: TODO): Promise<any> {
  return api()
    .put(`${config.routes.updateTodo}/${todo}/${id}`)
    .then((res) => res.data)
    .catch(catchErrorHandeler);
}
