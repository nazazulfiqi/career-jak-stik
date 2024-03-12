'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

import CardLamaran from '@/components/organisms/CardLamaran';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LamaranSayaContent: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('status');

  console.log(search);

  return (
    <section className='mb-6 bg-[#F8F8F8]'>
      <div className='mx-auto my-4 w-full max-w-[1440px]  gap-6 px-8 md:px-14 lg:px-16 2xl:px-0'>
        <h1 className='mb-4 text-3xl font-semibold'>Lamaran Saya</h1>
        <Tabs defaultValue={search as string}>
          <TabsList className='mb-8'>
            <TabsTrigger
              value='diterima'
              onClick={() => router.push('/lamaran-saya?status=diterima')}
            >
              Diterima
            </TabsTrigger>
            <TabsTrigger
              value='review'
              onClick={() => router.push('/lamaran-saya?status=review')}
            >
              Dalam Review
            </TabsTrigger>
            <TabsTrigger
              value='terkirim'
              onClick={() => router.push('/lamaran-saya?status=terkirim')}
            >
              Terkirim
            </TabsTrigger>
            <TabsTrigger
              value='ditolak'
              onClick={() => router.push('/lamaran-saya?status=ditolak')}
            >
              Ditolak
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value={search as string}
            className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'
          >
            {[0, 1, 2, 3].length < 0 ? (
              [0, 1, 2, 3].map((i) => <CardLamaran key={i} />)
            ) : (
              <div className='col-span-4 flex w-full flex-col items-center justify-center'>
                <Image
                  src='/images/lamaran-saya/question.png'
                  alt='Lamaran Kosong'
                  width={300}
                  height={300}
                />
                <h1 className='text-2xl '>Belum Ada Lamaran</h1>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LamaranSayaContent;
