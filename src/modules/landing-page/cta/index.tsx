import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className='text-neutrals-700 mb-12 bg-white'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 md:px-14 lg:px-16 2xl:px-0'>
        <div className='bg-primary-base lg:py-0px-4 h-[600px] w-full  overflow-hidden px-8 py-16 md:flex md:h-auto md:gap-8 md:px-8 lg:h-[400px] lg:items-center'>
          <div className='flex w-full flex-col gap-4 text-center md:w-1/2 md:gap-8  md:text-start lg:px-12'>
            <h3 className='text-3xl font-bold text-white lg:text-5xl'>
              Start posting jobs today
            </h3>
            <p className='text-white'>Start posting jobs for free!</p>
            <Button
              className='text-primary-base w-full bg-white font-semibold hover:bg-slate-200 lg:w-1/3'
              asChild
            >
              <Link href='/perusahaan/masuk'>Masuk</Link>
            </Button>
          </div>
          <div className='relative  w-full md:w-1/2'>
            <div className='absolute right-0 top-10 mx-auto md:top-0 lg:-top-32'>
              <Image
                src='/images/landing-page/cta/cta-image.jpg'
                alt='CTA'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
