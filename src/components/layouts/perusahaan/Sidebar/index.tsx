import Link from 'next/link';
import React, { FC } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';

import { Button } from '@/components/ui/button';

import ButtonLogout from './ButtonLogout';

const Sidebar: FC = () => {
  return (
    <div className='min-h-screen pb-12'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold'>Dashboard</h2>
          <div className='space-y-3'>
            <Button
              variant='ghost'
              className='hover:text-primary-base w-full items-center justify-start rounded-none'
              asChild
            >
              <Link href='/perusahaan/dashboard'>
                <AiOutlineHome className='mr-2 text-lg' />
                Home
              </Link>
            </Button>

            {/* <Button
              variant='ghost'
              className='hover:text-primary-base w-full items-center  justify-start rounded-none'
            >
              <FiUsers className='mr-2 text-lg' />
              All Applicants
            </Button> */}
            <Button
              variant='ghost'
              className='hover:text-primary-base w-full items-center  justify-start rounded-none'
              asChild
            >
              <Link href='/perusahaan/lowongan-pekerjaan'>
                <HiOutlineClipboardDocumentList className='mr-2 text-lg' />
                Lowongan Pekerjaan
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold'>Settings</h2>
          <Button
            variant='ghost'
            className='hover:text-primary-base w-full items-center  justify-start rounded-none'
            asChild
          >
            <Link href='/perusahaan/pengaturan'>
              <BsGear className='mr-2 text-lg' />
              Pengaturan
            </Link>
          </Button>
          <ButtonLogout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
