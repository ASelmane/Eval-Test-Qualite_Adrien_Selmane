import express, { Request, Response } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import path from 'path';

// Initializes and configures the Express application.
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: 'frontend' });
});

/**
 * Sets up the routes for the Todo API.
 */
app.use('/api', todoRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/docs', express.static(path.join(__dirname, '../docs')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
