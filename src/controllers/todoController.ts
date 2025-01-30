import { Request, Response } from 'express';
import * as todoService from '../services/todoService';

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Retrieve a list of todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: A list of todos
 */
export const getTodos = (req: Request, res: Response) => {
  res.json(todoService.getTodos());
};

/**
 * @swagger
 * /api/todos/{id}:
 *   get:
 *     summary: Retrieve a single todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single todo
 *       404:
 *         description: Todo not found
 */
export const getTodo = (req: Request, res: Response) => {
  const todo = todoService.getTodo(parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
};

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created todo
 */
export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo = todoService.createTodo(title);
  res.status(201).json(newTodo);
};

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: The updated todo
 *       404:
 *         description: Todo not found
 */
export const updateTodo = (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const updatedTodo = todoService.updateTodo(
    parseInt(req.params.id),
    title,
    completed,
  );
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).send('Todo not found');
  }
};

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Task deleted successfully
 *       404:
 *         description: Todo not found
 */
export const deleteTodo = (req: Request, res: Response) => {
  const success = todoService.deleteTodo(parseInt(req.params.id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Todo not found');
  }
};

/**
 * @swagger
 * /api/todos:
 *   delete:
 *     summary: Reset all todos
 *     tags: [Todos]
 *     responses:
 *       204:
 *         description: All todos reset
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Todolist reseted successfully
 */
export const reset = (req: Request, res: Response) => {
  todoService.reset();
  res.status(204).send();
};
