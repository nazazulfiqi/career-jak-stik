'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import { formSignInSchema } from '@/validations/form-schema';

const PerusahaanMasukModule: FC = () => {
  const router = useRouter();

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSignInSchema>) => {
    setLoading(true);
    try {
      const response = await signIn('login', {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      console.log(response);

      if (response?.error !== null) {
        toast({
          title: 'Gagal',
          description: response?.error,
        });
      } else {
        toast({
          title: 'Berhasil',
          description: 'Anda berhasil masuk!',
        });
        router.push('/perusahaan/dashboard');
      }
    } catch (error) {
      return null;
    }
    setLoading(false);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image
          src='/images/stmik.png'
          alt='logo'
          width={100}
          height={100}
          className='mx-auto'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
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

            {loading ? (
              <ButtonLoading className='w-full' />
            ) : (
              <Button
                type='submit'
                className='bg-primary-base hover:bg-hover-base w-full'
              >
                Sign In
              </Button>
            )}

            {/* <div className='mt-6 text-sm '>
              Don`t have an account{' '}
              <Link href='#' className='text-primary-base font-medium'>
                Sign Up
              </Link>
            </div> */}
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
};

export default PerusahaanMasukModule;
