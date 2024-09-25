'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { FC, Fragment } from 'react';

import { useGetDetailNews, useGetRelatedNews } from '@/hooks/news/hook';

import { BreadCrumb } from '@/components/atoms/bread-crumb';
import LoadingDots from '@/components/atoms/LoadingDots';

import NotFound from '@/app/not-found';
import RelatedNewsComponent from '@/modules/news/detail/components';

import { TNewsGetAllItem } from '@/types/news';

const DetailNewsModule: FC = () => {
  const NewsDetailBC = [
    {
      name: 'Beranda',
      link: '/',
    },
    { name: 'Berita', link: '/berita' },
    {
      name: 'Detail',
      link: `/berita/1`,
    },
  ];

  const params = useParams();

  const { data, isLoading } = useGetDetailNews(String(params.id));
  const { data: relatedNewsData, isLoading: relatedNewsLoading } =
    useGetRelatedNews(String(params.id));

  console.log(relatedNewsData);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingDots hScreen={true} />
      ) : data ? (
        <section className='mt-3 min-h-[100vh] bg-neutral-50/60 '>
          <div className=''>
            <BreadCrumb items={NewsDetailBC} />
          </div>
          <div className='mx-auto mb-12 w-full max-w-[1440px] px-8 pt-10 md:px-14 lg:px-16 2xl:px-0'>
            <main className='grid grid-cols-3 gap-x-10'>
              <section className='col-span-3 lg:col-span-2'>
                <h1 className='text-xl font-bold md:text-3xl'>
                  {data?.data?.title}
                </h1>
                <div className='my-4 flex flex-wrap gap-x-2 gap-y-2'>
                  {data?.data?.hashtag?.map((item: string, i) => (
                    <p
                      className='rounded-md bg-[#E3FBDA] px-3 text-[12px] font-semibold'
                      key={i}
                    >
                      #{item}
                    </p>
                  ))}
                </div>
                <div>
                  <div className='block justify-between md:flex md:py-6'>
                    <p>
                      {data?.data?.author} - {data?.data?.createdAt}
                    </p>
                  </div>
                  <div className='max-h-[500px]  w-full overflow-hidden'>
                    <Image
                      src={data?.data?.thumbnail}
                      width={1000}
                      height={400}
                      alt='Detail Article Image'
                      className='object-cover'
                    />
                  </div>
                  <p
                    className='py-4 text-justify md:text-lg'
                    dangerouslySetInnerHTML={{ __html: data?.data?.content }}
                  ></p>
                </div>
              </section>
              <section className='col-span-3 mt-6 lg:col-span-1'>
                <h1 className='font-bold'>Baca berita lainnya</h1>
                <span className='bg-primary-base mb-2 block h-[4px] w-24 rounded-md'></span>

                <div className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-black h-[400px] overflow-y-auto'>
                  {relatedNewsData && relatedNewsData?.length > 0 ? (
                    relatedNewsData?.map((item: TNewsGetAllItem) => (
                      <Fragment key={item.id}>
                        <RelatedNewsComponent data={item} />
                      </Fragment>
                    ))
                  ) : (
                    <p className='text-center text-gray-500'>
                      Tidak Ada Berita yang sesuai
                    </p>
                  )}
                </div>
              </section>
            </main>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};

export default DetailNewsModule;
