import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, ShoppingBag, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-purple-100 to-white"
    >
      <header className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-purple-800 mb-4"
        >
          Welcome to Happy Hamper
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Create personalized hampers for every occasion
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/shop"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Start Shopping
          </Link>
        </motion.div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Why Choose Happy Hamper?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gift size={40} />}
              title="Customizable Hampers"
              description="Mix and match items from various categories to create the perfect gift."
            />
            <FeatureCard
              icon={<ShoppingBag size={40} />}
              title="Wide Product Range"
              description="Choose from a vast selection of high-quality products across multiple categories."
            />
            <FeatureCard
              icon={<Star size={40} />}
              title="Unique Gifting Experience"
              description="Create memorable gifts that reflect your personal touch and care."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Ready to create your perfect hamper?</h2>
          <Link
            to="/shop"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-purple-100 p-6 rounded-lg text-center"
    >
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default HomePage;