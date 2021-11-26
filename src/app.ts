import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import {ErrorResponseObject} from './utils/index'
import routes from './routes/index';

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/', routes);

app.use((err: Error, _:Request, res: Response, __:NextFunction) => {
console.log('ERRRRRRRRRRRR',err)
  res.status(500).json(new ErrorResponseObject('ERRRRRRRRRRRR'));
});


app.all('*', (_, res: Response): void => {
    res.status(404).json(new ErrorResponseObject('#NOT_FOUND 😒😒😒'));
  });



export default app;