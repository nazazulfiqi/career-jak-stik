import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { useGetAllNews } from '@/hooks/news/hook';

import CardNews from '@/components/organisms/CardNews';

import { TNewsGetAllItem } from '@/types/news';

const NewsSection = () => {
  const { data, isLoading } = useGetAllNews();

  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8 py-12 md:px-14 lg:px-16 2xl:px-0'>
        <div className='flex justify-between'>
          <h1 className='mb-2 text-5xl font-bold leading-tight'>
            Baca <span className='text-primary-base'>berita</span> menarik
          </h1>
          <Link
            href='/berita'
            className='text-primary-base hidden items-center gap-2 md:flex'
          >
            <p>Lihat semua berita</p>
            <FaArrowRight />
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          {data?.data?.slice(0, 4).map((item: TNewsGetAllItem) => (
            <CardNews key={item.id} data={item} />
          ))}
        </div>

        <Link
          href='/berita'
          className='text-primary-base flex items-center gap-2 md:hidden'
        >
          <p>Lihat semua berita</p>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
