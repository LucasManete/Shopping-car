import 'express-async-errors';
import express from 'express';
import route from './routes/routes';
import errors from './middlewares/erroMiddlewares';

const app = express();
app.use(express.json());
app.use(route);
app.use(errors);

export default app;
