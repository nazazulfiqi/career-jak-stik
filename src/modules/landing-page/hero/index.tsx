import Image from 'next/image';
import React from 'react';

import { ComboboxDemo } from '@/modules/landing-page/hero/components/combobox';

const HeroSection = () => {
  return (
    <section className='relative'>
      <div className='mx-auto flex min-h-[100vh] w-full max-w-[1440px] items-center px-8 md:px-14 lg:px-16 2xl:px-0'>
        <div className='w-full'>
          <div className='w-1/3'>
            <h1 className='mb-4 text-6xl font-bold text-[#1D1D1D]'>
              Discover more than 5000+ Jobs
            </h1>
            <Image
              src='/svg/landing-page/hero-line.svg'
              alt='Hero Line'
              width={500}
              height={500}
            />
            <p>
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
          </div>
          <div className='relative'>
            <div className='absolute z-10 mt-5 flex w-auto gap-4 bg-white p-4 shadow-md'>
              <ComboboxDemo />
              <ComboboxDemo />
              <ComboboxDemo />
            </div>
          </div>
          <p className='mt-28'>
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
        <div className='absolute right-0 top-0 z-0'>
          <div className=''>
            <Image
              src='/svg/landing-page/hero-image.svg'
              alt='Hero Image'
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
