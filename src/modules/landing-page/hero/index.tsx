import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ComboboxDemo } from '@/modules/landing-page/hero/components/combobox';

const HeroSection = () => {
  return (
    <section className='text-neutrals-700 relative'>
      <div className='mx-auto my-10 flex min-h-[100vh] w-full max-w-[1440px] px-8 md:px-14 lg:px-16 2xl:px-0'>
        <div className='w-full'>
          <div className='relative z-10 md:w-1/2 lg:w-1/3'>
            <h1 className=' mb-2 text-6xl font-bold leading-tight'>
              Discover more than{' '}
              <span className='text-accents-blue'>5000+ Jobs</span>
            </h1>
            <Image
              src='/svg/landing-page/hero-line.svg'
              alt='Hero Line'
              width={500}
              height={500}
            />
            <p className='text-neutrals-600 mt-4 '>
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
          </div>
          <div className='md:relative'>
            <div className='z-10 mt-4 flex flex-wrap gap-4 rounded-md bg-white p-4 shadow-md md:absolute md:w-full md:flex-nowrap lg:w-2/3'>
              <div className='relative w-full md:w-2/3'>
                <Input
                  type='text'
                  placeholder='Job title or keyword'
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
                // href='/auth/register'
                type='button'
                className='bg-primary-base border-primary-base hover:text-primary-base mx-auto h-auto w-auto rounded-md border-2 px-12 py-2 text-white hover:bg-white'
              >
                Search my job
              </Button>
            </div>
          </div>
          <p className='text-neutrals-600 mt-6 md:mt-28'>
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
        <div className='absolute right-0 top-0 z-0 hidden overflow-hidden md:block'>
          <div className='md:-mr-48'>
            <Image
              src='/svg/landing-page/hero-image.svg'
              alt='Hero Image'
              width={0}
              height={0}
              // sizes='100vw'
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
