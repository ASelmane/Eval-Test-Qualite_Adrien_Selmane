import { describe, it, expect, beforeEach } from 'vitest';
import * as todoService from '../src/services/todoService';

describe('Todo Service', () => {
  beforeEach(() => {
    todoService.reset();
  });

  it('should create a new todo', () => {
    const todo = todoService.createTodo('Test Todo');
    expect(todo).toEqual({ id: 1, title: 'Test Todo', completed: false });
  });

  it('should get all todos', () => {
    todoService.createTodo('Test Todo 1');
    todoService.createTodo('Test Todo 2');
    const todos = todoService.getTodos();
    expect(todos.length).toBe(2);
  });

  it('should get a todo by id', () => {
    const todo = todoService.createTodo('Test Todo');
    const fetchedTodo = todoService.getTodo(todo.id);
    expect(fetchedTodo).toEqual(todo);
  });

  it('should update a todo', () => {
    const todo = todoService.createTodo('Test Todo');
    const updatedTodo = todoService.updateTodo(todo.id, 'Updated Todo', true);
    expect(updatedTodo).toEqual({
      id: todo.id,
      title: 'Updated Todo',
      completed: true,
    });
  });

  it('should delete a todo', () => {
    const todo = todoService.createTodo('Test Todo');
    const success = todoService.deleteTodo(todo.id);
    expect(success).toBe(true);
    expect(todoService.getTodos().length).toBe(0);
  });
});
