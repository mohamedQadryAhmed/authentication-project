import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form
          className='space-y-4'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            placeholder='Email'
            className='w-full border p-2 rounded-lg'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Password'
            className='w-full border p-2 rounded-lg'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800'>
            Login
          </button>
        </form>

        <p className='text-center text-sm mt-4'>
          Don’t have an account?{' '}
          <Link
            to='/register'
            className='font-semibold'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
