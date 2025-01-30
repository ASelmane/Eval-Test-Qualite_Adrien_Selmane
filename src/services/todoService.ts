import { Todo } from '../models/todo';

let todos: Todo[] = [];
let idCounter = 1;

/**
 * Retrieves all todos.
 * @returns {Todo[]} An array of all todos.
 */
export function getTodos(): Todo[] {
  return todos;
}

/**
 * Retrieves a todo by ID.
 * @param {number} id - The ID of the todo to retrieve.
 * @returns {Todo | undefined} The todo with the specified ID, or undefined if not found.
 */
export function getTodo(id: number): Todo | undefined {
  return todos.find((todo) => todo.id === id);
}

/**
 * Creates a new todo.
 * @param {string} title - The title of the new todo.
 * @returns {Todo} The created todo.
 */
export function createTodo(title: string): Todo {
  const newTodo: Todo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  return newTodo;
}

/**
 * Updates a todo by ID.
 * @param {number} id - The ID of the todo to update.
 * @param {string} title - The new title of the todo.
 * @param {boolean} completed - The new completion status of the todo.
 * @returns {Todo | undefined} The updated todo, or undefined if not found.
 */
export function updateTodo(
  id: number,
  title: string,
  completed: boolean,
): Todo | undefined {
  const todo = getTodo(id);
  if (todo) {
    todo.title = title;
    todo.completed = completed;
  }
  return todo;
}

/**
 * Deletes a todo by ID.
 * @param {number} id - The ID of the todo to delete.
 * @returns {boolean} True if the todo was deleted, false otherwise.
 */
export function deleteTodo(id: number): boolean {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

/**
 * Resets all todos.
 */
export function reset(): void {
  todos = [];
  idCounter = 1;
}
