import React, { FC } from 'react';

const LoadingDots: FC = () => {
  return (
    <div className='flex h-screen items-center justify-center space-x-2 bg-white dark:invert'>
      <span className='sr-only'>Loading...</span>
      <div className='bg-primary h-6 w-6 animate-bounce rounded-full [animation-delay:-0.3s]'></div>
      <div className='bg-primary h-6 w-6 animate-bounce rounded-full [animation-delay:-0.15s]'></div>
      <div className='bg-primary h-6 w-6 animate-bounce rounded-full'></div>
    </div>
  );
};

export default LoadingDots;
