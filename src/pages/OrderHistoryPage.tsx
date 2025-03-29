import React from 'react';
import { motion } from 'framer-motion';
import { Package, ChevronRight } from 'lucide-react';

// Mock order data
const orders = [
  { id: 1, date: '2024-03-01', status: 'Delivered', total: 45.98, items: ['Chocolate Box', 'Scented Candle'] },
  { id: 2, date: '2024-02-15', status: 'Shipped', total: 29.99, items: ['Skincare Set'] },
  { id: 3, date: '2024-01-30', status: 'Processing', total: 89.97, items: ['Wireless Earbuds', 'Phone Case', 'Charging Cable'] },
];

const OrderHistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8"
      >
        Order History
      </motion.h1>

      {orders.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <p className="text-xl text-gray-600">You haven't placed any orders yet.</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const OrderCard: React.FC<{ order: any }> = ({ order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Order #{order.id}</h2>
          <p className="text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div className="text-right">
          <p className={`font-semibold ${getStatusColor(order.status)}`}>{order.status}</p>
          <p className="text-gray-600">Total: ${order.total.toFixed(2)}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Items:</h3>
        <ul className="list-disc list-inside">
          {order.items.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
      <button className="text-purple-600 hover:text-purple-800 transition-colors flex items-center">
        View Details
        <ChevronRight size={20} />
      </button>
    </motion.div>
  );
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'text-green-600';
    case 'shipped':
      return 'text-blue-600';
    case 'processing':
      return 'text-yellow-600';
    default:
      return 'text-gray-600';
  }
};

export default OrderHistoryPage;