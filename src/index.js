import express from 'express';
import { router as routes } from "./routes.js"


const app = express();
app.use(routes)

app.listen(3000, () => {
  console.log('Server is listening!');
});
