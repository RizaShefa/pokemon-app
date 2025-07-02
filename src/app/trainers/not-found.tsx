import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='min-h-screen  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 flex items-center justify-center'>
      <div className='bg-white rounded-lg p-8 shadow-2xl max-w-md mx-4 text-center'>
        <h1 className='h1  text-purple-600 mb-4'>
          The Pokemon you're looking for doesn't exist.
        </h1>
        <p className='text-gray-600 mb-6 p'>
          The Pokemon you're looking for doesn't exist.
        </p>
        <Link
          href='/'
          className=' h-1  bg-text-purple-600 text-purple-600 rounded-lg hover:text-purple-800 transition-colors'
        >
          Back to Pokemon List
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
