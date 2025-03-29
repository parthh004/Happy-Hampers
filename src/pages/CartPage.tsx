import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

// Mock cart data
const cartItems = [
  { id: 1, name: 'Chocolate Box', price: 15.99, quantity: 2, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Scented Candle', price: 12.99, quantity: 1, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRANnPDBkjl284KilzK9bQyj6IJmBxF4nCRigCWqOIDwoGQojfj53z812gNST5NT7oA0s3oItt3YXuo4ZVPc2LmycrQahQ_PjxPJEHNsOs&usqp=CAE' },
  // Add more items as needed
];

const CartPage: React.FC = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8"
      >
        Your Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/shop" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Start Shopping
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/payment"
                className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-lg mt-6 hover:bg-purple-700 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const CartItem: React.FC<{ item: any }> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4"
    >
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500 hover:text-purple-600 transition-colors">
          <Minus size={20} />
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button className="text-gray-500 hover:text-purple-600 transition-colors">
          <Plus size={20} />
        </button>
      </div>
      <button className="ml-4 text-red-500 hover:text-red-600 transition-colors">
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
};

export default CartPage;