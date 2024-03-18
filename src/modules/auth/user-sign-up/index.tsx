'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';

import AuthLayout from '@/components/layouts/auth';
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

import OtpModalModule from '@/modules/auth/otp-modal';
import { modalOtp } from '@/recoil/atoms/auth-otp';
import { formSignUpSchema } from '@/validations/form-schema';

const SignUpModule: FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOtp);

  const [email, setEmail] = React.useState<string>('');

  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
  });

  const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {
    setEmail(values.email);
    console.log(values);

    // router.push(`/auth/otp?email=${values.email}`);

    setIsModalOpen(true);
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

          <Button
            type='submit'
            className='bg-primary-base hover:bg-hover-base w-full'
          >
            Sign Up
          </Button>

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
    </AuthLayout>
  );
};

export default SignUpModule;
