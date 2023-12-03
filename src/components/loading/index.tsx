import { FC, ReactElement } from 'react';

export const LoadingSpinner: FC = (): ReactElement => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div
        className='inline-block h-[40px] w-[40px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
    </div>
  );
};
