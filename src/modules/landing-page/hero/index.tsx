import React from 'react';

import FormSearch from '@/components/organisms/FormSearch';

const HeroSection = () => {
  return (
    <div className='mx-auto -mt-12 flex h-screen max-w-[1440px] flex-row items-center justify-between overflow-hidden'>
      <div className='w-full px-8 py-12 text-center md:px-14 lg:px-16 2xl:px-0'>
        <h1 className='mb-4 text-5xl font-bold text-white lg:text-7xl'>
          Pusat Layanan Karir
        </h1>

        <div className='mx-auto max-w-3xl text-sm text-white lg:text-lg'>
          Selamat Datang diwebsite Layanan Karir STMIK Jakarta STI&K Diwebsite
          ini akan memberikan informasi seputar layanan karir dan pengisian
          Kuisioner untuk para Alumni STMIK Jakarta STI&K.
        </div>
        <FormSearch />
      </div>
    </div>
  );
};

export default HeroSection;
