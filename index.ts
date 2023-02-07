import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

const port = 8000;
const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:3000', // client port
  credentials: true,
}

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send('hello from express')
});

app.listen(port, () => {
  console.log(`listening on ${port}`)
});
