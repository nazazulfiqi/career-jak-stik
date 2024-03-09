'use client';

import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Pagination from '@/components/atoms/pagination';
import CardNews from '@/components/organisms/CardNews';

const NewsModule: FC = () => {
  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <header className='mx-auto mb-12 flex w-full max-w-[1440px] flex-col items-center justify-center gap-2 px-8 pt-10 md:px-14 lg:px-16 2xl:px-0'>
      <h1 className='text-3xl font-bold text-neutral-800'>Baca Berita</h1>
      <p className='px-8 text-center text-lg text-[#A3A3A3]'>
        Temukan artikel menarik yang bakal menambah wawasanmu disini!
      </p>
      <section className='mx-auto mb-10 mt-10 h-[56px] w-full rounded-md bg-neutral-100 shadow-sm'>
        <div className='flex items-center gap-4 px-4 py-4 md:px-6'>
          <AiOutlineSearch className='text-xl text-neutral-400' />
          <input
            type='text'
            className='h-full w-full bg-neutral-100 text-sm  text-neutral-700 focus:outline-none'
            placeholder='Cari Artikel'
          />
        </div>
      </section>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
        {[0, 1, 2, 3].map((i) => (
          <CardNews key={i + 1} />
        ))}
      </div>
      <Pagination
        currentPage={6}
        totalPages={12}
        onPageChange={handlePageChange}
      />
    </header>
  );
};

export default NewsModule;
