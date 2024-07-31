import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { useGetAllJob } from '@/hooks/jobs/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import LatestJobItem from '@/components/organisms/LatestJobItem';

import { TGetAllJob } from '@/types/jobs';

const LatestJobSection = () => {
  const { data, isLoading } = useGetAllJob();

  console.log(data);
  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8 py-12 md:px-14 lg:px-16 2xl:px-0'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-5xl font-bold leading-tight'>
            Cari <span className='text-primary-base'>lowongan</span> terbaru
          </h1>
          <Link
            href='/cari-lowongan'
            className='text-primary-base hidden items-center gap-2 md:flex'
          >
            <p>Lihat lowongan terbaru</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3'>
          {isLoading ? (
            <div className='col-span-full items-center justify-center'>
              <LoadingDots />
            </div>
          ) : (
            data?.data
              ?.slice(0, 6)
              .map((item: TGetAllJob) => (
                <LatestJobItem key={item.id} {...item} />
              ))
          )}
        </div>
        <Link
          href='/cari-lowongan'
          className='text-primary-base flex items-center gap-2 md:hidden'
        >
          <p>Lihat lowongan terbaru</p>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default LatestJobSection;
