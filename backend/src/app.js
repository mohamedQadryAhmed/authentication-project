import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import errorMiddleware from './middlewares/error.middleware.js';
import APIError from './utils/APIError.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use((req, res, next) => {
  return next(new APIError(`Route ${req.originalUrl} not found`, 404));
});
app.use(errorMiddleware);

export default app;
