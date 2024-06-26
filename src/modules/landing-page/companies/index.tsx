import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

import { companiesLogos } from '@/modules/landing-page/companies/constant';

const CompaniesSection = () => {
  return (
    <section className='text-neutrals-600 relative bg-white '>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-8  md:px-14 lg:px-16 2xl:px-0'>
        <p className='mb-4 text-xl'>Companies we helped grow</p>
        <div className='flex gap-4'>
          <Marquee gradient={true}>
            {companiesLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt='Companies-Logo'
                width={200}
                height={200}
                priority
                style={{ width: 'auto', height: 'auto' }}
                className='px-6 md:px-8 lg:px-12'
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
