import React, { FC, Fragment } from 'react';

import { Separator } from '@/components/ui/separator';

interface FieldInputProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const FieldInput: FC<FieldInputProps> = ({ children, title, subtitle }) => {
  return (
    <>
      <div className='flex flex-row items-start'>
        <div className='w-[35%]'>
          <div className='text-lg font-semibold'>{title}</div>
          <div className='w-[80%] text-sm text-gray-800'>{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
