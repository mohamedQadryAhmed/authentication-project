import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import APIError from '../utils/APIError.js';

const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(new APIError('Not authorized, no token', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');

  if (!user) {
    return next(new APIError('No user found with this id', 404));
  }

  req.user = user;
  next();
});

export default authMiddleware;
