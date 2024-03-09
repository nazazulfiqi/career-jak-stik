import Link from 'next/link';
import React, { FC } from 'react';

const FooterCredit: FC = () => {
  return (
    <div className='w-full py-6'>
      <section className='mx-auto w-full max-w-[1440px] px-8  text-center text-[#737373] md:flex md:px-14 lg:px-16  2xl:px-0'>
        <div className='w-full md:flex md:w-1/2'>
          <h1 className='text-sm'>
            2024 - Naza Zulfiqi - Hak Cipta Dilindungi.
          </h1>
        </div>
        <div className='w-full justify-end gap-x-8 text-sm md:flex md:w-1/2'>
          <Link href='/' className='pr-4'>
            Terms of use
          </Link>
          <Link href='/'>Privacy policy</Link>
        </div>
      </section>
    </div>
  );
};

export default FooterCredit;
