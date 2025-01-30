import express, { Request, Response } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import { setupSwagger } from './swagger';

/**
 * Initializes and configures the Express application.
 */
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

/**
 * Serves the frontend application.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'frontend' });
});

/**
 * Sets up the routes for the Todo API.
 */
app.use('/api', todoRoutes);

/**
 * Sets up Swagger documentation for the API.
 * @param {Express} app - The Express application instance.
 */
setupSwagger(app);

/**
 * Starts the Express server.
 * @param {number} port - The port number on which the server will listen.
 */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
