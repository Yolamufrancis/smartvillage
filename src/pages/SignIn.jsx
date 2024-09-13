import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/backend/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-md'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 className='text-3xl text-center font-semibold mb-7'>Sign In</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input
              type='email'
              placeholder='Email'
              className='border p-3 rounded-lg'
              id='email'
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              className='border p-3 rounded-lg'
              id='password'
              value={formData.password}
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>
            <OAuth />
          </form>
          <div className='text-center mt-5'>
            <p className='text-gray-700'>Don't have an account?</p>
            <Link to='/sign-up' className='text-blue-700'>
              Sign up
            </Link>
          </div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </div>
  );
}
