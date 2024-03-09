import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const FooterLinks: FC = (): ReactElement => {
  return (
    <section className='flex w-full gap-8 lg:gap-20'>
      <div className=' text-neutral-900'>
        <h1 className=' mb-3 text-base font-bold lg:mb-6'>Halaman</h1>
        <ul className='flex flex-col gap-1 text-xs md:text-sm lg:gap-3 xl:gap-4'>
          <li className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out hover:underline hover:underline-offset-2'>
            <Link href='/cari-lowongan'>Cari Lowongan</Link>
          </li>
          <li className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out hover:underline hover:underline-offset-2'>
            <Link href='/cari-perusahaan'>Perusahaan</Link>
          </li>
          <li className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out hover:underline hover:underline-offset-2'>
            <Link href='/berita'>Berita</Link>
          </li>
          <li className='hover:text-version3-500 cursor-pointer transition-colors duration-300 ease-in-out hover:underline hover:underline-offset-2'>
            <Link href='/tentang-kami'>Tentang Kami</Link>
          </li>
        </ul>
      </div>
      <div className=' text-neutral-900'>
        <h1 className='mb-3 text-base font-bold lg:mb-6'>Kontak</h1>
        <ul className='flex flex-col gap-1 text-xs md:text-sm lg:gap-3 xl:gap-4'>
          <li>(021) 739 7973</li>
          <li>career.jak-stik@gmail.com</li>
        </ul>
      </div>
    </section>
  );
};
