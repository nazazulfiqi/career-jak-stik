import Image from 'next/image';
import React, { FC } from 'react';

import PerusahaanLayout from '@/components/layouts/perusahaan';
import { Card } from '@/components/ui/card';

const PerusahaanDashboardModule: FC = () => {
  return (
    <PerusahaanLayout>
      <main className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 space-y-4'>
          <Card className='flex w-full items-center justify-between '>
            <div className='space-y-2 p-6'>
              <h1 className='text-2xl'>
                Hello, <span className='font-bold'>Perusahaan!</span>
              </h1>
              <p className='text-sm'>
                Selamat Datang di Halaman Dashboard{' '}
                <span className='font-semibold'>Pelayanan Karir</span> STMIK
                Jakarta STI&K.
              </p>
            </div>

            <div className='relative h-44 w-full'>
              {' '}
              {/* Set the height of the container */}
              <Image
                src='/images/dashboard/hello.svg'
                alt='Hello Dashboard'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0'
              />
            </div>
          </Card>
        </div>
      </main>
    </PerusahaanLayout>
  );
};

export default PerusahaanDashboardModule;
