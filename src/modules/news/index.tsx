'use client';

import { useRouter, useSearchParams } from 'next/navigation'; // Import hooks dari next/navigation
import React, { FC, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { useDebounce } from '@/lib/helper/useDebounce';
import { useGetAllNews } from '@/hooks/news/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import CardNews from '@/components/organisms/CardNews';

import { TNewsGetAllItem } from '@/types/news';

const NewsModule: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ambil nilai search dari URL jika ada
  const searchQuery = searchParams.get('search') || ''; // Jika tidak ada, defaultnya ''

  // State untuk pencarian
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery);

  // Debounce pencarian untuk mengurangi frekuensi request
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Fetch news berdasarkan search term yang sudah didebounce
  const { data, isLoading } = useGetAllNews(debouncedSearchTerm);

  // Update URL setiap kali searchTerm berubah
  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      router.push(`/berita/?search=${encodeURIComponent(debouncedSearchTerm)}`);
    } else {
      router.push('/berita'); // Reset ke root jika kosong
    }
  }, [debouncedSearchTerm, router]);

  // Update searchTerm setiap kali URL berubah
  useEffect(() => {
    if (searchQuery !== searchTerm) {
      setSearchTerm(searchQuery); // Update jika URL search param berubah
    }
  }, [searchQuery]);

  return (
    <header className='mx-auto mb-12 flex w-full max-w-[1440px] flex-col items-center justify-center gap-2 px-8 pt-10 md:px-14 lg:px-16 2xl:px-0'>
      <h1 className='text-5xl font-bold text-neutral-800'>Baca Berita</h1>
      <p className='px-8 text-center text-lg text-[#A3A3A3]'>
        Temukan artikel menarik yang bakal menambah wawasanmu disini!
      </p>
      <section className='mx-auto mb-10 mt-10 h-[56px] w-full rounded-md bg-neutral-100 shadow-sm'>
        <div className='flex items-center gap-4 px-4 py-4 md:px-6'>
          <AiOutlineSearch className='text-xl text-neutral-400' />
          <input
            type='text'
            className='h-full w-full bg-neutral-100 text-sm text-neutral-700 focus:outline-none'
            placeholder='Cari Artikel'
            value={searchTerm} // Nilai input diambil dari state
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
      </section>
      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
        {isLoading ? (
          <div className='col-span-full'>
            <LoadingDots />
          </div>
        ) : data && data.data.length > 0 ? ( // Cek apakah data ada dan data.data.length > 0
          data.data.map((item: TNewsGetAllItem) => (
            <CardNews key={item.id} data={item} />
          ))
        ) : (
          <div className='col-span-full'>
            <p className='text-center'>Berita Tidak ditemukan</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewsModule;
