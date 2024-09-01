import React, { useState } from 'react';

const ProductCard = ({ product, role, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editProduct, setEditProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleSave = () => {
    // onUpdate(product._id, editProduct);
    // setIsEditing(false);
    onUpdate(product._id, editProduct)
      .then(() => {
        setIsEditing(false); // Close the edit mode after saving
      })
      .catch(error => {
        console.error("Failed to save changes:", error);
        // Optionally, handle the error state or show a message to the user
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 max-w-sm mx-auto">
      {isEditing ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={editProduct.name}
            onChange={handleChange}
            placeholder="Edit Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="description"
            value={editProduct.description}
            onChange={handleChange}
            placeholder="Edit Description"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="price"
            value={editProduct.price}
            onChange={handleChange}
            placeholder="Edit Price"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="stockQuantity"
            value={editProduct.stockQuantity}
            onChange={handleChange}
            placeholder="Edit Stock Quantity"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="category"
            value={editProduct.category}
            onChange={handleChange}
            placeholder="Edit Category"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-800 font-medium">Description: {product.description}</p>
          <p className="text-gray-800 font-medium">Price: ₹{product.price}</p>
          <p className="text-gray-800 font-medium">Stock: {product.stockQuantity}</p>
          <p className="text-gray-800 font-medium">Category: {product.category}</p>
          {role === 'stockManager' && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
