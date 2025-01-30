import request from 'supertest';
import { describe, it, expect, beforeEach } from 'vitest';
import app from '../src/index';
import * as todoService from '../src/services/todoService';

describe('Todo API', () => {
  beforeEach(() => {
    todoService.reset();
  });

  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({ title: 'Test Todo' });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Todo');
  });

  it('should get all todos', async () => {
    await todoService.createTodo('Test Todo 1');
    await todoService.createTodo('Test Todo 2');
    const response = await request(app).get('/api/todos');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('should get a todo by id', async () => {
    const todo = todoService.createTodo('Test Todo');
    const response = await request(app).get(`/api/todos/${todo.id}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Test Todo');
  });

  it('should update a todo', async () => {
    const todo = todoService.createTodo('Test Todo');
    const response = await request(app)
      .put(`/api/todos/${todo.id}`)
      .send({ title: 'Updated Todo', completed: true });
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Todo');
    expect(response.body.completed).toBe(true);
  });

  it('should delete a todo', async () => {
    const todo = todoService.createTodo('Test Todo');
    const response = await request(app).delete(`/api/todos/${todo.id}`);
    expect(response.status).toBe(204);
    const getResponse = await request(app).get(`/api/todos/${todo.id}`);
    expect(getResponse.status).toBe(404);
  });

  it('should reset all todos', async () => {
    await todoService.createTodo('Test Todo 1');
    await todoService.createTodo('Test Todo 2');
    const response = await request(app).delete('/api/todos');
    expect(response.status).toBe(204);
    const getResponse = await request(app).get('/api/todos');
    expect(getResponse.body.length).toBe(0);
  });
});
