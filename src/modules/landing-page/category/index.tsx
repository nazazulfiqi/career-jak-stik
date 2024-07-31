import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import CardCategory from '@/modules/landing-page/category/components/card';
import { jobCategory } from '@/modules/landing-page/category/constant';

const CategorySection = () => {
  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8 pt-24 md:px-14 lg:px-16 2xl:px-0'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-5xl font-bold leading-tight'>
            Cari berdasarkan <span className='text-primary-base'>kategori</span>
          </h1>
          <Link
            href='/cari-lowongan'
            className='text-primary-base hidden items-center gap-2 md:flex'
          >
            <p>Lihat semua lowongan</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {jobCategory.map((category, index) => (
            <CardCategory key={index} category={category} />
          ))}
        </div>
        <Link
          href='/cari-lowongan'
          className='text-primary-base flex items-center gap-2 md:hidden'
        >
          <p>Lihat semua lowongan</p>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;
