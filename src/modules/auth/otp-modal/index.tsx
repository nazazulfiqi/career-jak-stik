'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';

import { useOtpVerify } from '@/hooks/auth/hook';

import ButtonLoading from '@/components/organisms/LoadingButton';
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
import { useToast } from '@/components/ui/use-toast';

import { modalOtp, modalOtpSuccess } from '@/recoil/atoms/auth-otp';
import { authOTPSchema } from '@/validations/auth-schema';

interface Props {
  email: string;
}

const OtpModalModule: FC<Props> = ({ email }) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOtp);
  const [isModalSuccessOpen, setIsModalSuccessOpen] =
    useRecoilState(modalOtpSuccess);

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof authOTPSchema>>({
    resolver: zodResolver(authOTPSchema),
  });

  const { mutate, isPending } = useOtpVerify();

  const onSubmit = (values: z.infer<typeof authOTPSchema>) => {
    mutate(
      {
        email,
        otp: values.otp,
      },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          setIsModalSuccessOpen(true);
          setTimeout(() => {
            router.push('/auth/sign-in');
            setIsModalSuccessOpen(false);
          }, 2500);
        },
        onError: (e) => {
          toast({
            title: 'Gagal',
            description: 'Silahkan coba kembali.',
          });
        },
      }
    );
  };

  return (
    <Dialog open={isModalOpen} modal defaultOpen={isModalOpen}>
      <DialogContent className='w-full flex-col items-center md:flex md:min-w-[800px] md:flex-row'>
        <DialogHeader className='text-center'>
          <div className='mx-auto h-[300px] w-[300px]'>
            <Image
              src='/images/auth/otp.png'
              alt='Logo'
              width={0}
              height={0}
              priority
              sizes='100vw'
              style={{ width: '100%', height: '100%' }}
              className='w-full object-cover'
            />
          </div>
        </DialogHeader>
        <X
          className='absolute right-4 top-4 h-6 w-6 cursor-pointer'
          onClick={() => setIsModalOpen(false)}
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-full flex-col items-center justify-center space-y-6 md:block md:w-2/3'
          >
            <FormField
              control={form.control}
              name='otp'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='flex justify-center text-lg font-semibold md:block'>
                    Kode OTP
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      className='flex justify-center md:block'
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

            {isPending ? (
              <ButtonLoading className='cursor-not-allowed' />
            ) : (
              <Button
                type='submit'
                className='bg-primary-base hover:bg-hover-base'
              >
                Submit
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModalModule;
