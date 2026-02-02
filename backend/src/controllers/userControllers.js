import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import sendToken from '../utils/sendToken.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User Already Exists.' });
  }
  const user = await User.create({ name, email, password });

  const token = generateToken(user._id);

  // Send token in HTTP-only cookie
  sendToken(res, token);

  res.status(201).json({
    success: true,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password.' });
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const isMathched = await user.matchPassword(password, user.password);

  if (!isMathched) {
    return res.status(401).json({ message: 'Invalid password.' });
  }

  const token = generateToken(user._id);

  // Send token in HTTP-only cookie
  sendToken(res, token);

  res.status(200).json({
    success: true,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    },
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});

export { register, login, getUserProfile, logout };
