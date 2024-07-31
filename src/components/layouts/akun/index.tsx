'use client';

import Link from 'next/link';
import React, { FC, useState } from 'react';

import { useProfile } from '@/hooks/account/hook';
import { useUpdateProfilePicture } from '@/hooks/account/hook';

import UploadImage from '@/components/layouts/akun/UploadImage';
import { Separator } from '@/components/ui/separator';

import { akunMenuData } from '@/constant/akun';

interface AkunLayoutProps {
  children: React.ReactNode;
}

const AkunLayout: FC<AkunLayoutProps> = ({ children }) => {
  const { data, isLoading } = useProfile();
  const { mutate: updateProfilePicture } = useUpdateProfilePicture();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);
      updateProfilePicture(formData);
    }
  };

  return (
    <section className='bg-[#F8F8F8]'>
      <div className='mx-auto my-4 grid w-full max-w-[1440px] grid-cols-3 gap-6 px-8 md:px-14 lg:px-16 2xl:px-0'>
        <div className='mr-2 flex flex-col gap-4'>
          <div className='border-md flex h-full max-h-[150px] items-center gap-4 rounded-lg bg-white p-4'>
            <div className='min-w-[70px]'>
              <UploadImage
                onChange={handleImageChange}
                imageUrl={data?.data?.profilePicture}
                name={data?.data?.name}
              />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>
                {data?.data?.name.toUpperCase()}
              </h3>
              <p className='font-thin text-gray-800'>Mahasiswa</p>
              <p className='font-thin text-gray-800'>
                Sekolah Tinggi Manajemen Informatika dan Komputer Jakarta STI&K
              </p>
            </div>
          </div>
          <div className='border-md flex max-h-full min-h-[150px] items-center gap-4 rounded-lg bg-white p-4'>
            <div className='flex w-full flex-col gap-6'>
              {akunMenuData.map((item, i: number) => (
                <div className='flex w-full flex-col gap-4' key={i}>
                  <Link href={item.link} className='flex items-center gap-4'>
                    {item.icon}
                    <span className='text-lg font-semibold'>{item.title}</span>
                  </Link>
                  <Separator className='bg-gray-200' />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='border-md col-span-2 h-full min-h-[150px] items-center gap-4 rounded-lg bg-white p-6'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default AkunLayout;
