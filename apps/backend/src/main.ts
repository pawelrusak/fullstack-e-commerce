import express from 'express';
import * as path from 'path';
import { connectDB } from '@e-shop/database';
import { registerRoutes } from './routers';
import { errorHandler } from './middlewares/error-handler';

connectDB(process.env.DATABASE_URI);

// TODO add helmet middleware
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.use(express.json());

registerRoutes(app);

app.use(errorHandler);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
