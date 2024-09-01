import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://stockmanagementsystem-server.onrender.com/api/users/register', { username, password, role }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        }
      });
      alert('User registered successfully');
    } catch (error) {
      console.error('Error registering user', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-start">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="stockManager">Stock Manager</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register User
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
