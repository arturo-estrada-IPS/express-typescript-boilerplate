// eslint-disable-next-line no-unused-vars
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { catchUnhandledError, notFound } from './lib/middlewares';
import Router from './router';

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router());
app.use(notFound);
app.use(catchUnhandledError);

app.listen(8001, () => {
  console.log(chalk.blue('Server is up and running'));
});
