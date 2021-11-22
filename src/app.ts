import express, { json } from 'express';
import dotenv from 'dotenv';
import UserRouter from './routes/user';

const app = express();

dotenv.config();

app.use(json());
app.use('/user', UserRouter);

app.listen(process.env.PORT, () => {
    console.log(`The application is listening on port ${process.env.PORT}!`);
});
