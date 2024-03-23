'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useRecoilState } from 'recoil';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

import { modalOtpSuccess } from '@/recoil/atoms/auth-otp';

const OtpModalSuccess: FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOtpSuccess);

  return (
    <Dialog
      open={isModalOpen}
      modal
      defaultOpen={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <DialogContent className='w-full md:min-w-[600px]'>
        <DialogHeader className='text-center'>
          <div className='flex items-center justify-center py-2'>
            <div className='rounded-full bg-green-200 p-3'>
              <FaCheck className='text-green-800' size={34} />
            </div>
          </div>
          <div className='mx-auto h-[300px] w-[300px]'>
            <Image
              src='/images/auth/success.png'
              alt='Logo'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100%' }}
              priority
              className='w-full object-cover'
            />
          </div>
          <h1 className='py-4 text-center text-2xl font-semibold'>
            Email Berhasil di Aktivasi
          </h1>
        </DialogHeader>
        <X
          className='absolute right-4 top-4 h-6 w-6 cursor-pointer'
          onClick={() => setIsModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OtpModalSuccess;
