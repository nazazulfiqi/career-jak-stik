'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
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

import { formSignInSchema } from '@/validations/form-schema';

const SignInModule: FC = () => {
  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
  });

  const onSubmit = (values: z.infer<typeof formSignInSchema>) => {
    console.log(values);
  };

  const router = useRouter();

  return (
    <AuthLayout>
      <div className='mb-4 space-y-1'>
        <h1 className='text-3xl font-semibold'>Masuk</h1>
        <p className='text-sm text-slate-400'>
          Silahkan masuk menggunakan email dan kata sandi yang terdaftar
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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
                    placeholder='Enter your email'
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
            onClick={() => {
              router.push('/akun');
            }}
          >
            Sign In
          </Button>

          <div className='mt-6 text-sm '>
            Don`t have an account{' '}
            <Link
              href='/auth/sign-up'
              className='text-primary-base font-medium'
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default SignInModule;
