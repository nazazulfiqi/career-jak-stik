'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';

import { useRegister } from '@/hooks/auth/hook';

import AuthLayout from '@/components/layouts/auth';
import ButtonLoading from '@/components/organisms/LoadingButton';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

import OtpModalModule from '@/modules/auth/otp-modal';
import OtpModalSuccess from '@/modules/auth/otp-modal/modal-success';
import { modalOtp } from '@/recoil/atoms/auth-otp';
import { formSignUpSchema } from '@/validations/form-schema';

const SignUpModule: FC = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOtp);

  const [email, setEmail] = React.useState<string>('');

  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
  });

  const { mutate, isPending } = useRegister();

  const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {
    const { name, email, password } = values;
    setEmail(values.email);

    mutate(
      {
        name,
        email,
        password,
        role: 'USER',
      },
      {
        onSuccess: () => {
          toast({
            title: 'Berhasil',
            description:
              'Akun berhasil dibuat, silahkan cek email untuk aktivasi',
          });
          setIsModalOpen(true);
        },
        onError: (e) => {
          toast({
            title: 'Gagal',
            description: 'Email sudah terdaftar',
          });
        },
      }
    );
  };

  return (
    <AuthLayout>
      <div className='mb-4 space-y-1'>
        <h1 className='text-3xl font-semibold'>Daftar Akun</h1>
        <p className='text-sm text-slate-400'>
          Silahkan isi data berikut untuk melakukan pendaftaran
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isPending ? (
            <ButtonLoading className='bg-primary-base w-full cursor-not-allowed' />
          ) : (
            <Button
              type='submit'
              className='bg-primary-base hover:bg-hover-base w-full'
            >
              Sign Up
            </Button>
          )}

          <div className='mt-6 text-sm'>
            Already have an account?{' '}
            <Link
              href='/auth/sign-in'
              className='text-primary-base font-medium'
            >
              Sign In
            </Link>
          </div>
        </form>
      </Form>
      <OtpModalModule email={email} />
      <OtpModalSuccess />
    </AuthLayout>
  );
};

export default SignUpModule;
