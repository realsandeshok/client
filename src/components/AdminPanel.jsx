import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import RegisterUser from './RegisterUser';
import UserList from './UserList';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Panel</h1>

        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Register New User Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Register New User</h2>
            <RegisterUser />
          </div>

          {/* Users List Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Users List</h2>
            <UserList />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} role="admin" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
