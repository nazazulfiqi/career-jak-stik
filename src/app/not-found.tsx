import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <Link href='/'>
            <Image src='/images/404.png' width={500} height={500} alt='404' />
          </Link>
        </div>
      </section>
    </main>
  );
}
