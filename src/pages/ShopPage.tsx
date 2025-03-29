import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';

// Mock API call
const fetchProducts = async () => {
  // In a real application, this would be an API call
  return [
    { id: 1, name: 'Chocolate Box', category: 'Food', price: 5, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Scented Candle', category: 'Home Decor', price: 2, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRANnPDBkjl284KilzK9bQyj6IJmBxF4nCRigCWqOIDwoGQojfj53z812gNST5NT7oA0s3oItt3YXuo4ZVPc2LmycrQahQ_PjxPJEHNsOs&usqp=CAE' },
    { id: 3, name: 'Skincare Set', category: 'Beauty', price: 7, image: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    // Add more mock products here
  ];
};

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data: products, isLoading, error } = useQuery('products', fetchProducts);

  const categories = ['All', 'Food', 'Home Decor', 'Beauty', 'Electronics', 'Fashion'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products?.filter(product => product.category === selectedCategory);

  const usdToInr = 82; // Approximate conversion rate

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading products</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Shop Our Products</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts?.map(product => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">₹{(product.price * usdToInr).toFixed(2)}</span>
                <button className="bg-purple-600 text-white px-3 py-1 rounded-full flex items-center hover:bg-purple-700 transition-colors">
                  <ShoppingCart size={16} className="mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
