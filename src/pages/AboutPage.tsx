import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Truck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8 text-center"
      >
        About Happy Hamper
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Happy Hamper was born out of a simple idea: to bring joy and personalization to gift-giving. We believe that every gift should be as unique as the person receiving it. That's why we created a platform where you can curate your own perfect hamper, filled with items that truly resonate with your loved ones.
          </p>
          <p className="text-gray-700">
            Since our inception in 2024, we've been dedicated to sourcing high-quality products from local and international artisans, ensuring that each item in your hamper is special and meaningful.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Happy Hamper, our mission is to revolutionize the gift-giving experience by providing a platform that allows you to create personalized, thoughtful presents for any occasion. We strive to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Offer a wide range of high-quality products</li>
            <li>Provide an intuitive and enjoyable shopping experience</li>
            <li>Support local businesses and artisans</li>
            <li>Minimize our environmental impact through sustainable practices</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Happy Hamper?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Gift size={40} />}
              title="Customization"
              description="Create unique hampers tailored to your recipient's tastes and preferences."
            />
            <FeatureCard
              icon={<Heart size={40} />}
              title="Quality"
              description="We source only the finest products to ensure your gift is truly special."
            />
            <FeatureCard
              icon={<Truck size={40} />}
              title="Reliable Delivery"
              description="Fast and secure shipping to ensure your hamper arrives in perfect condition."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700">
            Behind Happy Hamper is a dedicated team of gift enthusiasts, tech experts, and customer service professionals. We're committed to making your gift-giving experience as delightful as possible. From curating our product selection to ensuring smooth delivery, every team member plays a crucial role in bringing smiles to faces across the world.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="text-purple-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;