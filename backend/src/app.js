import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.all('*splate', (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

export default app;
