import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const CardNews: FC = () => {
  return (
    <section className='flex h-full min-h-[400px] w-auto flex-col justify-between rounded-lg border border-neutral-300 bg-white'>
      <div className='group h-full  w-full'>
        <div className='p-4'>
          <div className='relative w-full'>
            <div className='absolute inset-0 h-full w-full rounded-md bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50'></div>
            <Image
              src='/images/news/news1.png'
              alt='image-article'
              width={0}
              height={0}
              sizes='50vw'
              loading='eager'
              priority={true}
              style={{
                height: '208px',
                width: '100%',
              }}
              className='w-full rounded-md object-cover'
            />

            <div className='absolute inset-0 mx-auto flex h-full w-full items-center justify-center bg-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <Link
                href='/news/berita-1'
                className='bg-primary-base flex items-center justify-center rounded-md bg-opacity-100 px-6 py-2 font-semibold text-white'
              >
                Lihat
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-[10px] px-4'>
          <div className='flex w-full flex-wrap  justify-between gap-y-3'>
            <div className='flex  space-x-2 '>
              <p className='rounded-md bg-black px-3 text-[12px] font-semibold text-white '>
                #Educatioon
              </p>
            </div>
            <p className='text-[12px] text-neutral-500'>Senin, 05 Maret 2024</p>
          </div>
          <div>
            <h1 className='mt-2 overflow-hidden text-[18px] font-bold text-black'>
              Dampak Buruk Junk Food Untuk Kesehatan Tubuh
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardNews;
