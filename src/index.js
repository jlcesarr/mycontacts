/* eslint-disable import/extensions */
import express from 'express';
import 'express-async-errors';
import { router as routes } from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);
app.use((err, request, response, _) => response.status(500).json({ error: 'Internal Server Error' }));

app.listen(3000, () => {
  console.log('Server is listening!');
});
