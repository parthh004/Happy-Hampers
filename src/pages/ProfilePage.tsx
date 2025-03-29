import React from 'react';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings } from 'lucide-react';

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 1, 2024',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8"
      >
        My Profile
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-1"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <User size={64} className="text-purple-600 mr-4" />
              <div>
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <p className="text-gray-600">Member since: {user.joinDate}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-2"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <QuickActionCard
                icon={<Package size={24} />}
                title="My Orders"
                description="View your order history"
                link="/orders"
              />
              <QuickActionCard
                icon={<Heart size={24} />}
                title="Wishlist"
                description="Manage your favorite items"
                link="/wishlist"
              />
              <QuickActionCard
                icon={<Settings size={24} />}
                title="Account Settings"
                description="Update your profile and preferences"
                link="/settings"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const QuickActionCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-purple-50 p-4 rounded-lg flex items-start cursor-pointer"
      onClick={() => {/* Navigate to link */}}
    >
      <div className="text-purple-600 mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProfilePage;