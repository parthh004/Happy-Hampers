import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Home, LogIn, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/cart', icon: <ShoppingCart size={20} />, label: 'Cart' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
    { to: '/auth', icon: <LogIn size={20} />, label: 'Login/Signup' },
  ];

  return (
    <nav className="bg-purple-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Happy Hamper</Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} />
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} mobile />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string; mobile?: boolean }> = ({ to, icon, label, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center ${mobile ? 'py-2' : ''} hover:text-purple-200 transition-colors ${
        isActive ? 'text-purple-200' : ''
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        {icon}
        <span className={mobile ? 'ml-2' : 'ml-1 hidden lg:inline'}>{label}</span>
      </motion.div>
    </Link>
  );
};

export default Navbar;