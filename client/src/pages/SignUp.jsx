import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Form submitted');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Sign Up
      </h1>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your full name"
          id="name"
          aria-label="Full Name"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          id="email"
          aria-label="Email Address"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Create a password"
          id="password"
          aria-label="Password"
          className="bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition font-semibold"
        >
          Sign Up
        </button>
      </form>

      <div className="flex justify-center gap-2 mt-5 text-gray-600">
        <p>Already have an account?</p>
        <Link to="/sign-in" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
