import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { Badge } from '@/components/ui/badge';

import { FooterAddress } from './address';
import { FooterDesc } from './desc';
import { FooterIcons } from './icons';
import { FooterLinks } from './links';
import FooterCredit from '../footer-credit/footer-credit';

export const LayoutFooter: FC = (): ReactElement => {
  return (
    <>
      <div className='w-full bg-[#F5F5F5]'>
        <div className='z-40 mx-auto grid w-full max-w-[1440px] grid-cols-3 gap-x-10 gap-y-10 px-8 py-6 md:px-14 lg:px-16 xl:gap-y-20 2xl:px-0'>
          <section className='col-span-3  mb-4 pr-0  lg:col-span-1'>
            <Link className='flex' href='/'>
              <div className='inline-flex items-center gap-2'>
                <Image
                  src='/images/stmik.png'
                  alt='/images/stmik.png'
                  width={60}
                  height={60}
                />
                <span className='w-full text-2xl font-bold italic'>
                  Layanan Karir.
                </span>
              </div>
              <Badge
                variant='outline'
                className='ml-1 h-6 bg-black px-2 text-white'
              >
                Beta
              </Badge>
            </Link>
            <FooterDesc />
            <FooterIcons />
          </section>
          <section className='col-span-3 flex flex-wrap gap-x-20 gap-y-10 lg:col-span-2 xl:flex-nowrap'>
            <FooterLinks />
            <FooterAddress />
          </section>
        </div>
        <FooterCredit />
      </div>
    </>
  );
};
