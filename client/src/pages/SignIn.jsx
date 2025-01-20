
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function SignIn() {
  const [formData, setFormData] = useState({});

  const {loading, error} = useSelector((state) => state.user);  

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});
  }

  

  // so that page doens't refresh
  const handleSubmit = async (e) =>{ 
    e.preventDefault();

    try{
      dispatch(signInStart());


      const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    });

    const data = await res.json();
    
    
    if(data.success === false){
      dispatch(signInFailure(data));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/Home')
  
    }catch(error){
      dispatch(signInFailure(error));
      console.log(error);
    }



  };



  


  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">



        <input
          type="email"
          placeholder="Email"
          id="email"
          aria-label="Email Address"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          aria-label="Password"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={handleChange}
        />

        
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition font-semibold"
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>

      <div className="flex justify-center gap-2 mt-5 text-gray-600">
        <p>Dont have an account?</p>
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'something went wrong' : ''}
        
        </p>
    </div>
  );
}
