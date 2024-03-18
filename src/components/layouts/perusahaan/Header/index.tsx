'use client';

import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';

import { Button } from '@/components/ui/button';

const Header: FC = () => {
  const { data: session } = useSession();

  return (
    <div className='border-border mb-3 flex flex-row items-center justify-between border-b  pb-3'>
      <div>
        <div>Company</div>
        <div className='font-semibold'>STMIK Jakarta STI&K</div>
      </div>
      <div>
        <Button
          className='bg-primary-base hover:bg-hover-base rounded-none px-6 py-3'
          asChild
        >
          <Link href='/perusahaan/posting-lowongan'>
            <PlusIcon className='mr-2 h-4 w-4' /> Posting Lowongan
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
