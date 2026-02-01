import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

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
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email address.'],
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

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  // Hash password logic here
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (
  enteredPassword,
  storedPassword,
) {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

const User = mongoose.model('User', userSchema);

export default User;
