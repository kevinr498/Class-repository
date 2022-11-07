import { TODOS } from "./db.js";

export const generateDbId = () => {
  return TODOS[TODOS.length - 1].id + 1;
};
export const isDuplicate = (todo) => {
  return TODOS.some((t) => t.task === todo.task || t.id === todo.id);
};
