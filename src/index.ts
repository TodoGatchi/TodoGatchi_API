import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from './routes';
// import dotenv from 'dotenv';

const port = 8000;
const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:3000', // client port
  credentials: true,
}

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
