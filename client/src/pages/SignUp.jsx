import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value});
  }

  

  // so that page doens't refresh
  const handleSubmit = async (e) =>{ 
    e.preventDefault();

    try{
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    });

    const data = await res.json();
    setLoading(false);
    console.log(data);

    if(data.success === false){
      setError(true);
      return;
    }
  
    }catch{
      setLoading(false);
      setError(true);
    }



  };



  


  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <input
          type="text"
          placeholder="Enter your full name"
          id="username"
          aria-label="Full Name"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter your email address"
          id="email"
          aria-label="Email Address"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Create a password"
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
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      <div className="flex justify-center gap-2 mt-5 text-gray-600">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'something went wrong'}</p>
    </div>
  );
}
