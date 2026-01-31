import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User must have name.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'User must have email.'],
    },
    password: {
      type: String,
      required: [true, 'User must have password.'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
