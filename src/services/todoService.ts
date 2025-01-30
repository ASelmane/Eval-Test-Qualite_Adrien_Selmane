import { Todo } from '../models/todo';

let todos: Todo[] = [];
let idCounter = 1;

/**
 * Retrieves all todos.
 * @returns {Todo[]} An array of todos.
 */
export const getTodos = (): Todo[] => todos;

/**
 * Retrieves a todo by ID.
 * @param {number} id - The ID of the todo to retrieve.
 * @returns {Todo | undefined} The todo with the specified ID, or undefined if not found.
 */
export const getTodo = (id: number): Todo | undefined =>
  todos.find((todo) => todo.id === id);

/**
 * Creates a new todo.
 * @param {string} title - The title of the new todo.
 * @returns {Todo} The created todo.
 */
export const createTodo = (title: string): Todo => {
  const newTodo: Todo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  return newTodo;
};

/**
 * Updates a todo by ID.
 * @param {number} id - The ID of the todo to update.
 * @param {string} title - The new title of the todo.
 * @param {boolean} completed - The new completion status of the todo.
 * @returns {Todo | undefined} The updated todo, or undefined if not found.
 */
export const updateTodo = (
  id: number,
  title: string,
  completed: boolean,
): Todo | undefined => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.title = title;
    todo.completed = completed;
  }
  return todo;
};

/**
 * Deletes a todo by ID.
 * @param {number} id - The ID of the todo to delete.
 * @returns {boolean} True if the todo was deleted, false if not found.
 */
export const deleteTodo = (id: number): boolean => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * Resets the todo list.
 */
export const reset = () => {
  todos = [];
  idCounter = 1;
};
