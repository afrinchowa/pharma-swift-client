'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-md w-full p-8 rounded-lg shadow-xl transition-all bg-white dark:bg-gray-800 relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="User Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-gray-300 dark:border-gray-600"
          />
          <h1 className="text-2xl font-semibold mt-4">John Doe</h1>
          <p className="text-gray-600 dark:text-gray-400">Registered Customer</p>
        </div>
        
        <div className="mt-6 space-y-4 text-sm">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <span className="text-gray-700 dark:text-gray-300">johndoe@email.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-green-500" />
            <span className="text-gray-700 dark:text-gray-300">123 Main St, City, Country</span>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}