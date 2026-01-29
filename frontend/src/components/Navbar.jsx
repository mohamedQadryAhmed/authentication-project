import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const user = { name: 'Mohamed' };

  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between '>
        <Link to='/'>
          <h1 className='text-xl font-bold'>Auth App</h1>
        </Link>
        <div className='flex items-center gap-4'>
          {!isAuthenticated ? (
            <>
              <Link
                to='/login'
                className='text-gray-700 hover:text-black transition'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='text-gray-700 hover:text-black transition'
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className='w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-serif'>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <Link
                to='/dashboard'
                className='text-gray-700 hover:text-black transition'
              >
                Dashboard
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
