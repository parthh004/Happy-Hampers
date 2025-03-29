import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Happy Hamper</h3>
          <p>Customized hampers for every occasion.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            <li><FooterLink to="/terms">Terms & Conditions</FooterLink></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <SocialIcon href="https://facebook.com" icon={<Facebook size={24} />} />
            <SocialIcon href="https://twitter.com" icon={<Twitter size={24} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={24} />} />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Happy Hamper. All rights reserved.</p>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <motion.div whileHover={{ x: 5 }} className="mb-2">
    <Link to={to} className="hover:text-purple-300 transition-colors">
      {children}
    </Link>
  </motion.div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3 }}
    className="text-white hover:text-purple-300 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Footer;