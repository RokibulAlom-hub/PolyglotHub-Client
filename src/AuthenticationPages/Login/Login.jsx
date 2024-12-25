import React from 'react';
import { FaGoogle } from 'react-icons/fa';  // Import Google icon from React Icons
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SweetSuccess from '../../Components/Sweetalerts/SweetSuccess';
import SweetError from '../../Components/Sweetalerts/SweetError';

export default function Login() {
  const navigate = useNavigate();
  const {googlelogin,userLogin} = useAuth()
  const handleLogin = e => {
    e.preventDefault()

    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password')

    console.log({ email, password });
    userLogin(email,password)
    .then(result => {
        console.log("user logged in",result.user);
        SweetSuccess();
        navigate('/')
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        SweetError()
      });

}
  const handleGoogleLogin = () => {
    googlelogin()
    .then((result) => {
        // console.log(result.user);
        console.log(result);
        SweetSuccess();
        navigate('/')
    })
    .catch((err) =>{
      console.log(err.message);
      SweetError()
      
    }
    )
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
              required 
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700">
            Login
          </button>
        </form>
        <div className="text-center">
          <button 
            onClick={handleGoogleLogin} 
            className="w-full px-4 py-2 mt-4 font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 flex items-center justify-center"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-800">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
