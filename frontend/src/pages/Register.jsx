import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <input
            type='text'
            placeholder='Name'
            className='w-full border p-2 rounded-lg'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            Register
          </button>
        </form>
        <p className='text-center text-sm mt-4'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='font-semibold'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
