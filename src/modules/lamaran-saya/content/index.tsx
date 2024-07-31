'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC } from 'react';

import { useGetAllAplicantsMe } from '@/hooks/applicants-me/hook';

import LoadingDots from '@/components/atoms/LoadingDots';
import CardLamaran from '@/components/organisms/CardLamaran';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LamaranSayaContent: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get('status') || 'SUBMITTED';

  console.log(search);

  const { data, isLoading } = useGetAllAplicantsMe(search as string);

  return (
    <section className='bg-[#F8F8F8] pb-12'>
      <div className='mx-auto my-4 w-full max-w-[1440px]  gap-6 px-8 md:px-14 lg:px-16 2xl:px-0'>
        <h1 className='mb-4 text-3xl font-semibold'>Lamaran Saya</h1>
        <Tabs defaultValue={search as string}>
          <TabsList className='mb-8'>
            <TabsTrigger
              value='SUBMITTED'
              onClick={() => router.push('/lamaran-saya?status=SUBMITTED')}
            >
              Terkirim
            </TabsTrigger>
            <TabsTrigger
              value='ACCEPTED'
              onClick={() => router.push('/lamaran-saya?status=ACCEPTED')}
            >
              Diterima
            </TabsTrigger>
            <TabsTrigger
              value='REVIEWED'
              onClick={() => router.push('/lamaran-saya?status=REVIEWED')}
            >
              Dalam Review
            </TabsTrigger>

            <TabsTrigger
              value='REJECTED'
              onClick={() => router.push('/lamaran-saya?status=REJECTED')}
            >
              Ditolak
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value={search as string}
            className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'
          >
            {isLoading ? (
              <div className='col-span-4 flex min-h-[500px] w-full flex-col items-center justify-center'>
                <LoadingDots />
              </div>
            ) : data && data?.data?.length > 0 ? (
              data?.data?.map((item) => (
                <CardLamaran key={item.id} data={item} />
              ))
            ) : (
              <div className='col-span-4 flex h-full w-full flex-col items-center justify-center'>
                <Image
                  src='/images/lamaran-saya/question.png'
                  alt='Lamaran Kosong'
                  width={300}
                  height={300}
                />
                <h1 className='text-2xl'>Belum Ada Lamaran</h1>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LamaranSayaContent;
