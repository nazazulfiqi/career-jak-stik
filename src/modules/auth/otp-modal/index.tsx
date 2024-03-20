'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';

import { useOtpVerify } from '@/hooks/auth/hook';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { modalOtp } from '@/recoil/atoms/auth-otp';
import { authOTPSchema } from '@/validations/auth-schema';

interface Props {
  email: string;
}

const OtpModalModule: FC<Props> = ({ email }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOtp);

  const router = useRouter();

  const form = useForm<z.infer<typeof authOTPSchema>>({
    resolver: zodResolver(authOTPSchema),
  });

  const { mutate } = useOtpVerify();

  const onSubmit = (values: z.infer<typeof authOTPSchema>) => {
    mutate(
      {
        email,
        otp: values.otp,
      },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          router.push('/auth/sign-in');
        },
        onError: (e) => {
          console.log(e);
        },
      }
    );
  };

  return (
    <Dialog
      open={isModalOpen}
      modal
      defaultOpen={isModalOpen}
      onOpenChange={() => setIsModalOpen(!isModalOpen)}
    >
      <DialogContent className='w-full flex-col sm:flex sm:flex-row'>
        <DialogHeader className='text-center'>
          <Image
            src='/images/auth/otp.png'
            alt='Logo'
            width={400}
            height={400}
          />
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6'
          >
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-lg font-semibold'>
                    Kode OTP
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      render={({ slots }) => (
                        <InputOTPGroup>
                          {slots.map((slot, index) => (
                            <InputOTPSlot key={index} {...slot} />
                          ))}{' '}
                        </InputOTPGroup>
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan kode otp yang dikirimkan ke email anda.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type='submit'
              className='bg-primary-base hover:bg-hover-base'
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModalModule;
