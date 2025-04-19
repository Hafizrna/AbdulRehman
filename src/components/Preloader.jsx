import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show preloader for 2.5 seconds
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        {/* Replace with your actual logo */}
        <div className="w-32 h-32 bg-black-600 rounded-full flex items-center justify-center mb-4">
          <span className="text-white text-xl font-bold">
            <img src={assets.logo} alt="" />
          </span>
        </div>
        
        {/* Loading spinner */}
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        
        {/* Loading text */}
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
}