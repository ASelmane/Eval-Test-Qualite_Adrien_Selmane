import { Router } from 'express';
import * as todoController from '../controllers/todoController';

const router = Router();

router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodo);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.delete('/todos', todoController.reset);

export default router;
