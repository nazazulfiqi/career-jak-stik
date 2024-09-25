import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { formatDate } from '@/lib/helper/formatDate';

import { TNewsGetAllItem } from '@/types/news';

interface TRelatedNewsProps {
  data: TNewsGetAllItem;
}

const RelatedNewsComponent: FC<TRelatedNewsProps> = ({ data }) => {
  return (
    <Link href={`/berita/${data.id}`}>
      <section className='py-2'>
        <section className='flex items-center gap-2'>
          <Image
            width={20}
            height={20}
            sizes='30vw'
            src={data?.thumbnail}
            alt='Related Image Article'
            className='h-20 w-20 flex-shrink-0 rounded-md bg-blue-200 object-cover'
          />
          <main>
            <h1 className='mb-2 line-clamp-2 pr-10 text-sm font-bold'>
              {data?.title}
            </h1>
            <section className='flex flex-wrap items-center gap-2'>
              <div className='w-fit rounded-md bg-slate-200 px-2 py-1 text-xs font-bold shadow-sm'>
                <p className='bg-secondary-blue-100 rounded-md px-1 text-[12px] font-semibold text-neutral-800'>
                  {data.hashtag[0]}
                </p>
              </div>{' '}
              <span>|</span>{' '}
              <h1 className='text-xs text-neutral-600'>
                {formatDate(data?.createdAt)}
              </h1>
            </section>
          </main>
        </section>
      </section>
    </Link>
  );
};

export default RelatedNewsComponent;
