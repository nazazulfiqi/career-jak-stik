import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import CardCategory from '@/modules/landing-page/category/components/card';
import { jobCategory } from '@/modules/landing-page/category/constant';

const CategorySection = () => {
  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='py-  mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8 py-12 md:px-14 lg:px-16 2xl:px-0'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-5xl font-bold leading-tight'>
            Explore by <span className='text-accents-blue'>category</span>
          </h1>
          <div className='text-primary-base hidden items-center gap-2 md:flex'>
            <p>Show all jobs</p>
            <FaArrowRight />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {jobCategory.map((category, index) => (
            <CardCategory key={index} category={category} />
          ))}
        </div>
        <div className='text-primary-base flex items-center gap-2 md:hidden'>
          <p>Show all jobs</p>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
