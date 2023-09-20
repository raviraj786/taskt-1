// src/components/Registration.js
import React from 'react';

import { useNavigate } from 'react-router-dom';
import{ useState } from 'react';


const LoginSrc = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/Registration');

    const [formData, setFormData] = useState({
        number: '',
        password: '',
      });


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };



      const handleLogin = async (e) => {
        e.preventDefault();
    
        // Perform API call for authentication here
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Redirect to the home screen upon successful login
            window.location.href = '/home';
          } else {
            // Handle login failure, e.g., display an error message
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    

 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>
        <form className="mt-8 space-y-6"  onSubmit={handleLogin}>
         
          
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            mobile number
            </label>
            <input
              id="number"
              name="number"
              type="text"
              autoComplete="number"
              required
              value={formData.number}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          
         
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>


        <button 
         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleClick}>Registration</button>
        
      </div>
    </div>
  );
};

export default LoginSrc;
