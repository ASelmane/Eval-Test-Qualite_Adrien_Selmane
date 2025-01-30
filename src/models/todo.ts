/**
 * @typedef {Object} Todo
 * @property {number} id - The ID of the todo.
 * @property {string} title - The title of the todo.
 * @property {boolean} completed - The completion status of the todo.
 */
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
