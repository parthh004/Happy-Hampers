import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CreditCard, Lock } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically process the payment
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-800 mb-8"
      >
        Payment
      </motion.h1>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="cardName" className="block text-gray-700 font-semibold mb-2">Name on Card</label>
              <input
                type="text"
                id="cardName"
                {...register('cardName', { required: 'Name on card is required' })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName.message as string}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">Card Number</label>
              <div className="relative">
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber', { 
                    required: 'Card number is required',
                    pattern: {
                      value: /^[0-9]{16}$/,
                      message: 'Please enter a valid 16-digit card number'
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                />
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message as string}</p>}
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  {...register('expiryDate', { 
                    required: 'Expiry date is required',
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: 'Please enter a valid expiry date (MM/YY)'
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message as string}</p>}
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  {...register('cvv', { 
                    required: 'CVV is required',
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: 'Please enter a valid CVV'
                    }
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message as string}</p>}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <Lock size={20} className="mr-2" />
                Pay Securely
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center text-gray-600"
        >
          <p>Your payment information is secure and encrypted.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPage;