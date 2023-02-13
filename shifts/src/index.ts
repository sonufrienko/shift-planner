import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router as shiftsRouter } from './router';
import { errorHandler } from './middleware/error';
import { notFoundHandler } from './middleware/notFound';

dotenv.config();

const PORT: number = Number(process.env.PORT || '3000');

const app: Express = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => {
  try {
    res.send({
      message: 'OK',
      timestamp: Date.now(),
      // uptime: Math.round(process.uptime()),
      // mongodb: mongo.isConnected()
    });
  } catch (e) {
    res.status(503).end();
  }
});
app.use('/v1/shifts', shiftsRouter);
app.use(errorHandler);
app.use(notFoundHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
