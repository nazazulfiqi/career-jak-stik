import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { ComboboxDemo } from '@/components/atoms/combobox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FormSearch: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ambil nilai dari parameter search
  const search = searchParams.get('search');

  const [searchTerm, setSearchTerm] = React.useState<string>(search || '');

  useEffect(() => {
    // Set nilai input berdasarkan query param ketika pertama kali komponen di-render
    if (search) {
      setSearchTerm(search);
    }
  }, [search]);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    // Izinkan navigasi meskipun input kosong
    if (trimmedSearchTerm) {
      router.push(
        `/cari-lowongan?search=${encodeURIComponent(trimmedSearchTerm)}`
      );
    } else {
      // Navigasi tanpa query search jika kosong
      router.push('/cari-lowongan');
    }
  };

  return (
    <>
      <div className='mx-auto mt-4 flex flex-wrap gap-4 rounded-md bg-white p-4 shadow-md md:w-full md:flex-nowrap'>
        <div className='relative w-full md:w-2/3'>
          <Input
            type='text'
            placeholder='Job title or keyword'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='pl-10'
          />
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <AiOutlineSearch className='text-gray-400' size={20} />
          </div>
        </div>
        <div className='w-full md:w-2/3'>
          <ComboboxDemo />
        </div>
        <Button
          type='button'
          onClick={handleSearch}
          className='bg-primary-base border-primary-base hover:text-primary hover:bg-hover-base mx-auto h-auto w-auto rounded-md border-2 px-12 py-2 text-white'
        >
          Search my job
        </Button>
      </div>
      <div>
        <div className='mt-4 text-white'>
          Popular : UI Designer, UX Researcher, Android, Admin
        </div>
      </div>
    </>
  );
};

export default FormSearch;
