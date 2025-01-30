import { Request, Response } from 'express';
import * as todoService from '../services/todoService';

export const getTodos = (req: Request, res: Response) => {
  res.json(todoService.getTodos());
};

export const getTodo = (req: Request, res: Response) => {
  const todo = todoService.getTodo(parseInt(req.params.id, 10));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = todoService.createTodo(title);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const updatedTodo = todoService.updateTodo(
    parseInt(req.params.id, 10),
    title,
    completed,
  );
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).send('Todo not found');
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const success = todoService.deleteTodo(parseInt(req.params.id, 10));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Todo not found');
  }
};

export const reset = (req: Request, res: Response) => {
  todoService.reset();
  res.status(204).send();
};
