'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='wrapper relative mt-0 flex min-h-[100vh] items-center justify-center bg-[#F8F8F8]'>
      <div className='box relative flex h-full w-[950px] rounded-lg bg-white shadow-sm shadow-slate-500 '>
        <div className='box-left hidden min-h-[400px] w-1/2 overflow-hidden rounded-l-lg text-center lg:block'>
          <Link className='absolute left-0 top-0 p-4' href='/'>
            <Image
              src='/images/stmik.png'
              alt='SignIn Logo'
              width={80}
              height={80}
            />
          </Link>
          <Image
            src='/images/landing-page/hero-image.jpg'
            width={1000}
            height={1000}
            alt='hero-login'
            priority={true}
            className='h-[600px] object-cover'
          />
        </div>
        <div className='box-right my-auto flex min-h-[400px]  w-full flex-col justify-center px-8 lg:h-full lg:w-1/2'>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
