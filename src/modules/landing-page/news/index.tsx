import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import CardNews from '@/components/organisms/CardNews';

const NewsSection = () => {
  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8 py-12 md:px-14 lg:px-16 2xl:px-0'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-5xl font-bold leading-tight'>
            Baca <span className='text-primary-base'>berita</span> menarik
          </h1>
          <div className='text-primary-base hidden items-center gap-2 md:flex'>
            <p>Lihat semua berita</p>
            <FaArrowRight />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {[0, 1, 2, 3].map((i) => (
            <CardNews key={i} />
          ))}
        </div>
        <div className='text-primary-base flex items-center gap-2 md:hidden'>
          <p>Lihat semua berita</p>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
