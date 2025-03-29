import React from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8 text-center"
      >
        Terms and Conditions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6"
      >
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using the Happy Hamper website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Use of the Service</h2>
          <p className="text-gray-700">
            You agree to use Happy Hamper's services only for lawful purposes and in accordance with these Terms. You are prohibited from using the service in any way that could damage, disable, overburden, or impair our servers or networks.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Account Registration</h2>
          <p className="text-gray-700">
            To use certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Product Information and Pricing</h2>
          <p className="text-gray-700">
            We strive to provide accurate product information and pricing. However, in the event of an error, we reserve the right to correct any mistakes and cancel any orders placed for products listed at incorrect prices.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Shipping and Delivery</h2>
          <p className="text-gray-700">
            Shipping times and costs may vary depending on the delivery location and selected shipping method. Happy Hamper is not responsible for delays caused by customs or other factors outside our control.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Returns and Refunds</h2>
          <p className="text-gray-700">
            Our return and refund policy allows for returns within 14 days of receipt for unused and unopened items. Custom-made hampers are non-refundable unless damaged during shipping.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Privacy Policy</h2>
          <p className="text-gray-700">
            Your use of Happy Hamper is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on the Happy Hamper website, including text, graphics, logos, and images, is the property of Happy Hamper and protected by copyright laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p className="text-gray-700">
            Happy Hamper shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">10. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the Happy Hamper website.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsPage;