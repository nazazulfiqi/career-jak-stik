'use client';

import { signOut } from 'next-auth/react';
import React, { FC } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

import { Button } from '@/components/ui/button';

const ButtonLogout: FC = () => {
  return (
    <Button
      variant='ghost'
      className='w-full items-center justify-start rounded-none  text-red-500  hover:bg-red-200 hover:text-red-500'
      onClick={() => signOut()}
    >
      <AiOutlineLogout className='mr-2 text-lg' />
      Logout
    </Button>
  );
};

export default ButtonLogout;
