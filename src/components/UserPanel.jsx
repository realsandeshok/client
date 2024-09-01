import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const UserPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://stockmanagementsystem-server.onrender.com/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">User Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} role="user" />
        ))}
      </div>
    </div>
  </div>
  );
};

export default UserPanel;
