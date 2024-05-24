import express from 'express';
import * as path from 'path';
import productsRouter from './routers/products.router';
import categoriesRouter from './routers/categories.router';
import { connectDB } from '@e-shop/database';

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

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoriesRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
