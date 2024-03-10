import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const RelatedNewsComponent: FC = () => {
  return (
  <Link href='/news/1'>
      <section className='py-2'>
        <section className='flex items-center gap-2'>
          <Image
            width={20}
            height={20}
            sizes='30vw'
            src='/images/news/news1.png'
            alt='Related Image Article'
            className='h-20 w-20 flex-shrink-0 rounded-md bg-blue-200 object-cover'
          />
          <main>
            <h1 className='mb-2 pr-10 text-sm font-bold'>
              Ayo Eksplor Visual Desain!
            </h1>
            <section className='flex flex-wrap items-center gap-2'>
              <div className='w-fit rounded-md bg-slate-200 px-2 py-1 text-xs font-bold shadow-sm'>
                <p className='bg-secondary-blue-100 rounded-md px-1 text-[12px] font-semibold text-neutral-800'>
                  #Desain
                </p>
              </div>{' '}
              <span>|</span>{' '}
              <h1 className='text-xs text-neutral-600'>
                Selasa, 15 Maret 2024
              </h1>
            </section>
          </main>
        </section>
      </section>
    </Link>
  );
};

export default RelatedNewsComponent;
