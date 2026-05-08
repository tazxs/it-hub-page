import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold font-headings text-accent mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved. Let's get you back to the campus.
        </p>
        <Link 
          to="/" 
          className="bg-accent text-black font-bold py-3 px-8 rounded hover:bg-white transition-colors inline-block"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
