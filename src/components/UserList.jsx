// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('authToken');  // Get the token from localStorage
            const { data } = await axios.get('https://stockmanagementsystem-server.onrender.com/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    fetchUsers();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      await axios.delete(`https://stockmanagementsystem-server.onrender.com/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Failed to remove user:', error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md ">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Users List</h2>
    <ul className="divide-y divide-gray-200">
      {users.map((user) => (
        <li
          key={user._id}
          className="flex items-center justify-between py-2"
        >
          <span className="text-gray-800">{user.username} - {user.role}</span>
          <button
            onClick={() => handleRemoveUser(user._id)}
            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>

  );
};

export default UserList;
