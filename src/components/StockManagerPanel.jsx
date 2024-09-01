import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const StockManagerPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('https://stockmanagementsystem-server.vercel.app/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

const handleUpdate = async (productId, updatedFields) => {
    try {
      const token = localStorage.getItem('authToken');

    //   if (!token) {
    //     throw new Error("No token found");
    //   }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      const { data: updatedProduct } = await axios.put(
        `http://localhost:5000/api/products/${productId}`, 
        updatedFields, 
        config
      );

      // Updating the local state with the updated product
      setProducts(products.map(p => (p._id === productId ? updatedProduct : p)));
    } catch (error) {
      console.error("Failed to update the product:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Stock Manager Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            role="stockManager"
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default StockManagerPanel;
